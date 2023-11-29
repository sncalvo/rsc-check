function sleep(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(10), ms))
}

export const SlowToRenderComponent = async () => {
  const startTime = Date.now();
  const _data = await sleep(5000);
  const endTime = Date.now();

  return <div className="p-5">SlowToRenderComponent rendered in {endTime - startTime}ms</div>
};
