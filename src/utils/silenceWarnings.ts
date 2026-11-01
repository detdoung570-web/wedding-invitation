export const silenceThirdPartyWarnings = () => {
  // Hide the "parts" logs from YouTube
  const originalLog = console.log;
  console.log = (...args) => {
    if (typeof args[0] === 'string' && args[0] === 'parts') return;
    originalLog(...args);
  };

  // Hide the postMessage warning from YouTube
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' && 
      args[0].includes("Failed to execute 'postMessage'")
    ) return;
    originalWarn(...args);
  };
};