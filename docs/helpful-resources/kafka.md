# Kafka

Kafka is a pub sub messaging queue which allows loose coupling of applications.

Pros:
- Loose coupling of applications. If another application needs some data, they can just consume (subscribe to) the topic. The application that is producing the messages does not need to produce to each and every listener.

Cons:
- More difficult to manage who is allowed to see data. Need to make sure you have something in place to prevent unauthorized applications/users from consuming from the topic.
- Difficult to see the message backlog. Each consumer manages this themself, so the producer does not know how far behind each consumer is. (Good for decoupling, but can be an issue of this functionality is needed)

Things to consider:
- Data is homogeneous. If each consumer needs the same data, this is perfectly fine. But if some consumers need some portion of the data, and other consumers need a different portion, then it may be better to insert each bit of data in a queue for each consumer.

## Kafka Connect

Kafka Connect is an ecosystem of tools that can be used to connect databases, data sources, and more to a Kafka topic. Connectors can be used as producers and consumers.

"Apache Kafka 101: Kafka Connect" by Confluent: https://youtu.be/J6adhl3wEj4
