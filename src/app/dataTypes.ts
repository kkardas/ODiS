export class Server {
  IP: string;
  bits: number;

  public constructor (p_ip: string,
                      p_bits: number) {
    this.IP = p_ip;
    this.bits = p_bits;
  }
}

export enum TYPE_OF_REQUEST {
  NONE,
  DAYS,
  HOURS,
  MINUTES
}

export class DayRecord {
  serwer: string;
  timestamp: string;
  bits: number;

  public constructor (p_serwer: string,
                      p_time: string,
                      p_bits: number) {
    this.serwer = p_serwer;
    this.timestamp = p_time;
    this.bits = p_bits;
  }
}

export class AcctServer {
  macSrc: string;
  macDst: string;
  ipSrc: string;
  ipDst: string;
  srcPort: string;
  dstPort: string;
  ipProto: string;
  packets: string;
  bytes: string;
  stampInserted: string;
  stampUpdated: string;

  public constructor (p_ipSrc: string,
                      p_ipDst: string) {
    this.macSrc = '';
    this.macDst = '';
    this.ipSrc = p_ipSrc;
    this.ipDst = p_ipDst;
    this.srcPort = '';
    this.dstPort = '';
    this.ipProto = '';
    this.packets = '';
    this.bytes = '';
    this.stampInserted = '';
    this.stampUpdated = '';
  }
}

export class YtRecord {
  timeSpent: string;
  startedWatching: string;

  public constructor (p_time: string,
                      p_start: string) {
    this.timeSpent = p_time;
    this.startedWatching = p_start;
  }
}

export class ServerBytes {
  server: string;
  bytes: number;

  public constructor (p_server: string,
                      p_bytes: number) {
    this.server = p_server;
    this.bytes = p_bytes;
  }
}
