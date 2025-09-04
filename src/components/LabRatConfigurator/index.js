import React, { useState } from 'react';
import styles from './styles.module.css';

export default function LabRatConfigurator() {
  const [config, setConfig] = useState({
    configMode: 'SDCARD',
    show: {
      mode: 'DELAY',
      delaySecs: 0,
      rangeSecs: 5,
      onTimeSecs: 5,
      resetSecs: 5,
      audio: '',
      audioDelaySecs: 0
    },
    ambient: {
      audio: '',
      ambientDelaySecs: 0
    }
  });

  const [showInstructions, setShowInstructions] = useState(false);
  const [copied, setCopied] = useState(false);

  const updateConfig = (section, field, value) => {
    if (section === 'root') {
      setConfig(prev => ({
        ...prev,
        [field]: value
      }));
    } else {
      setConfig(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    }
  };

  const handleNumberInput = (section, field, value) => {
    const numValue = value === '' ? 0 : Number(value);
    if (!isNaN(numValue) && numValue >= 0) {
      updateConfig(section, field, numValue);
    }
  };

  const getCleanConfig = () => {
    // Create a clean config object based on selected mode and values
    const downloadableConfig = {
      configMode: config.configMode,
      show: {
        mode: config.show.mode,
        delaySecs: config.show.delaySecs,
        onTimeSecs: config.show.onTimeSecs,
        resetSecs: config.show.resetSecs
      }
    };

    // Add rangeSecs only for RETRIGGER mode
    if (config.show.mode === 'RETRIGGER') {
      downloadableConfig.show.rangeSecs = config.show.rangeSecs;
    }

    // Add audio fields if specified
    if (config.show.audio) {
      downloadableConfig.show.audio = config.show.audio;
      downloadableConfig.show.audioDelaySecs = config.show.audioDelaySecs;
    }

    // Add ambient section if audio is specified
    if (config.ambient.audio) {
      downloadableConfig.ambient = {
        audio: config.ambient.audio,
        ambientDelaySecs: config.ambient.ambientDelaySecs
      };
    }

    return downloadableConfig;
  };

  const downloadConfig = () => {
    const downloadableConfig = getCleanConfig();
    const jsonString = JSON.stringify(downloadableConfig, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'config.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setShowInstructions(true);
  };

  const copyToClipboard = () => {
    const downloadableConfig = getCleanConfig();
    const jsonString = JSON.stringify(downloadableConfig, null, 2);
    navigator.clipboard.writeText(jsonString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles.configurator}>
      <div className={styles.header}>
        <h2>LabRat G2 Configurator</h2>
        <p>Configure your LabRat G2 settings and download the config.json file for your SD card.</p>
      </div>

      <div className={styles.section}>
        <h3>Configuration Mode</h3>
        <select 
          value={config.configMode} 
          onChange={(e) => updateConfig('root', 'configMode', e.target.value)}
          className={styles.select}
        >
          <option value="SDCARD">SD Card Mode (settings from SD card)</option>
          <option value="STANDARD">Standard Mode (save to device memory)</option>
          <option value="IGORBOX">IgorBox Mode (sync with IgorBox account)</option>
        </select>
        <p className={styles.help}>
          {config.configMode === 'SDCARD' && 'Settings will be read from the SD card each time the device starts.'}
          {config.configMode === 'STANDARD' && 'Settings will be saved to the LabRat\'s internal memory.'}
          {config.configMode === 'IGORBOX' && 'LabRat will sync with your IgorBox account for full show playback!'}
        </p>
      </div>

      <div className={styles.section}>
        <h3>Show Settings</h3>
        
        <div className={styles.field}>
          <label>Trigger Mode</label>
          <select 
            value={config.show.mode} 
            onChange={(e) => updateConfig('show', 'mode', e.target.value)}
            className={styles.select}
          >
            <option value="DELAY">Delay Mode</option>
            <option value="RETRIGGER">Random Retrigger Mode</option>
            <option value="MOTION">Motion Mode (if sensor installed)</option>
          </select>
          <p className={styles.help}>
            {config.show.mode === 'DELAY' && 'Output activates after a delay when triggered.'}
            {config.show.mode === 'RETRIGGER' && 'Randomly retriggers within a time range.'}
            {config.show.mode === 'MOTION' && 'Activates based on motion detection (requires motion sensor).'}
          </p>
        </div>

        <div className={styles.field}>
          <label>Delay Before Activation (seconds)</label>
          <input 
            type="number" 
            min="0" 
            value={config.show.delaySecs}
            onChange={(e) => handleNumberInput('show', 'delaySecs', e.target.value)}
            className={styles.input}
          />
          <p className={styles.help}>Time to wait after trigger before activating the output.</p>
        </div>

        {config.show.mode === 'RETRIGGER' && (
          <div className={styles.field}>
            <label>Random Range (seconds)</label>
            <input 
              type="number" 
              min="0" 
              value={config.show.rangeSecs}
              onChange={(e) => handleNumberInput('show', 'rangeSecs', e.target.value)}
              className={styles.input}
            />
            <p className={styles.help}>Time range for random retrigger in RETRIGGER mode.</p>
          </div>
        )}

        <div className={styles.field}>
          <label>Output On Time (seconds)</label>
          <input 
            type="number" 
            min="0" 
            value={config.show.onTimeSecs}
            onChange={(e) => handleNumberInput('show', 'onTimeSecs', e.target.value)}
            className={styles.input}
          />
          <p className={styles.help}>How long the output relay stays on (0 for a quick blip).</p>
        </div>

        <div className={styles.field}>
          <label>Reset Time (seconds)</label>
          <input 
            type="number" 
            min="0" 
            value={config.show.resetSecs}
            onChange={(e) => handleNumberInput('show', 'resetSecs', e.target.value)}
            className={styles.input}
          />
          <p className={styles.help}>Time to wait after output turns off before accepting new triggers.</p>
        </div>

        <div className={styles.field}>
          <label>Audio File (optional)</label>
          <input 
            type="text" 
            value={config.show.audio}
            onChange={(e) => updateConfig('show', 'audio', e.target.value)}
            placeholder="e.g., sound.mp3"
            className={styles.input}
          />
          <p className={styles.help}>Audio file to play when triggered (must be in /media folder on SD card).</p>
        </div>

        {config.show.audio && (
          <div className={styles.field}>
            <label>Audio Delay (seconds)</label>
            <input 
              type="number" 
              min="0" 
              value={config.show.audioDelaySecs}
              onChange={(e) => handleNumberInput('show', 'audioDelaySecs', e.target.value)}
              className={styles.input}
            />
            <p className={styles.help}>Delay before playing the audio file after trigger.</p>
          </div>
        )}
      </div>

      <div className={styles.section}>
        <h3>Ambient Settings (Optional)</h3>
        
        <div className={styles.field}>
          <label>Ambient Audio File</label>
          <input 
            type="text" 
            value={config.ambient.audio}
            onChange={(e) => updateConfig('ambient', 'audio', e.target.value)}
            placeholder="e.g., ambient_sound.mp3"
            className={styles.input}
          />
          <p className={styles.help}>Background audio to loop when not triggered (must be in /media folder).</p>
        </div>

        {config.ambient.audio && (
          <div className={styles.field}>
            <label>Ambient Delay (seconds)</label>
            <input 
              type="number" 
              min="0" 
              value={config.ambient.ambientDelaySecs}
              onChange={(e) => handleNumberInput('ambient', 'ambientDelaySecs', e.target.value)}
              className={styles.input}
            />
            <p className={styles.help}>Time to wait after trigger completes before starting ambient audio.</p>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button onClick={downloadConfig} className={styles.downloadButton}>
          Download config.json
        </button>
      </div>

      {showInstructions && (
        <div className={styles.instructions}>
          <h3>📥 Next Steps</h3>
          <ol>
            <li>Insert your SD card into your computer</li>
            <li>Copy the downloaded <code>config.json</code> file to the root of your SD card</li>
            {(config.show.audio || config.ambient.audio) && (
              <li>Create a <code>media</code> folder on the SD card and add your audio files:
                {config.show.audio && <div>• <code>{config.show.audio}</code> for trigger audio</div>}
                {config.ambient.audio && <div>• <code>{config.ambient.audio}</code> for ambient audio</div>}
              </li>
            )}
            <li>Safely eject the SD card from your computer</li>
            <li>Insert the SD card into your LabRat G2</li>
            <li>Power on your LabRat G2 - it will automatically read the configuration!</li>
          </ol>
          <p className={styles.note}>
            <strong>Note:</strong> The LabRat G2 will create the folder structure automatically when you insert the SD card for the first time.
          </p>
        </div>
      )}

      <div className={styles.preview}>
        <div className={styles.previewHeader}>
          <h3>Preview</h3>
          <button onClick={copyToClipboard} className={styles.copyButton}>
            {copied ? '✓ Copied!' : 'Copy JSON'}
          </button>
        </div>
        <pre className={styles.code}>
          {JSON.stringify(getCleanConfig(), null, 2)}
        </pre>
      </div>
    </div>
  );
}