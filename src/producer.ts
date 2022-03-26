import { producer } from ".";
import { TOPIC } from "./enums";

(async () => {
  await producer.connect();
  await producer.send({
    topic: TOPIC.FIRST_TOPIC,
    messages: [{ value: "bibibi" }],
  });
  await producer.disconnect();
})()
  .then(() => console.log("=== done send topic ==="))
  .catch(console.error);
