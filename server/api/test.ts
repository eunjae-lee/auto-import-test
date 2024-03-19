export default defineEventHandler(async (event) => {
  someUtil("server");

  return {
    hello: "world",
  };
});
