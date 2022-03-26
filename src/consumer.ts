import { consumer } from ".";
import { TOPIC } from "./enums";

(async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: TOPIC.FIRST_TOPIC });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message?.value?.toString(),
      });
    },
  });
})()
  .then(() => console.log("=== done subscribe ==="))
  .catch(console.error);
