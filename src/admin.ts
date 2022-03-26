import { admin } from ".";
import { TOPIC } from "./enums";

(async () => {
  // remember to connect and disconnect when you are done
  await admin.connect();

  // create a topic
  await admin.createTopics({
    topics: [
      {
        topic: TOPIC.FIRST_TOPIC,
        numPartitions: 1, // default is 1
        replicationFactor: 1, // default is 1
      },
    ],
  });

  await admin.disconnect();
})()
  .then(() => console.log("=== done create topic ==="))
  .catch(console.error);
