(async () => {
  if (import.meta.env.MODE === "development") {
    await import('../styles/index.css')
  }
})()
