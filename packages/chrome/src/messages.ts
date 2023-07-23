enum MessageType {
  token = "TOKEN"
}

export class Message {
  type: MessageType
  constructor(type: MessageType) {
    this.type = type
  }
}
export class Token extends Message {
  name: string
  url: string
  constructor(name: string, url: string) {
    super(MessageType.token);
    this.name = name
    this.url = url
  }
}
