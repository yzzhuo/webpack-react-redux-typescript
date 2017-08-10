class Recorder {
  private config:any;
  constructor(config?:any) {
    this.config = config || {};
    this.config.sampleRate = config.simpleRate || 44100;
    this.config.bitRate = config.bitRate || 128;
    }
  }
