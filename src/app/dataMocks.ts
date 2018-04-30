import {DayRecord, Server, AcctServer, YtRecord, ServerBytes} from './dataTypes';

export const DaysData: DayRecord[] =
  [ new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 20),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 30),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 16),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 59),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 29),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 25),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 65),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 36),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 58),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 25),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 85),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 75),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 46),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 63) ];

export const HoursData: DayRecord[] =
  [ new DayRecord("104.16.109.18", '2018-04-23T01:00:00.000+0000', 53),
    new DayRecord("104.16.109.18", '2018-04-23T02:00:00.000+0000', 64),
    new DayRecord("104.16.109.18", '2018-04-23T03:00:00.000+0000', 75),
    new DayRecord("104.16.109.18", '2018-04-23T04:00:00.000+0000', 84),
    new DayRecord("104.16.109.18", '2018-04-23T05:00:00.000+0000', 65),
    new DayRecord("104.16.109.18", '2018-04-23T06:00:00.000+0000', 34),
    new DayRecord("104.16.109.18", '2018-04-23T07:00:00.000+0000', 24),
    new DayRecord("104.16.109.18", '2018-04-23T08:00:00.000+0000', 11),
    new DayRecord("104.16.109.18", '2018-04-23T09:00:00.000+0000', 64),
    new DayRecord("104.16.109.18", '2018-04-23T10:00:00.000+0000', 43),
    new DayRecord("104.16.109.18", '2018-04-23T12:00:00.000+0000', 61),
    new DayRecord("104.16.109.18", '2018-04-23T13:00:00.000+0000', 18),
    new DayRecord("104.16.109.18", '2018-04-23T14:00:00.000+0000', 46),
    new DayRecord("104.16.109.18", '2018-04-23T15:00:00.000+0000', 23),
    new DayRecord("104.16.109.18", '2018-04-23T16:00:00.000+0000', 65),
    new DayRecord("104.16.109.18", '2018-04-23T17:00:00.000+0000', 34),
    new DayRecord("104.16.109.18", '2018-04-23T18:00:00.000+0000', 24),
    new DayRecord("104.16.109.18", '2018-04-23T19:00:00.000+0000', 11),
    new DayRecord("104.16.109.18", '2018-04-23T20:00:00.000+0000', 64),
    new DayRecord("104.16.109.18", '2018-04-23T21:00:00.000+0000', 43),
    new DayRecord("104.16.109.18", '2018-04-23T22:00:00.000+0000', 61),
    new DayRecord("104.16.109.18", '2018-04-23T23:00:00.000+0000', 18),
    new DayRecord("104.16.109.18", '2018-04-23T00:00:00.000+0000', 46)];

export const MinutesData: DayRecord[] =
  [ new DayRecord("104.16.109.18", '2018-04-23T00:05:00.000+0000', 75),
    new DayRecord("104.16.109.18", '2018-04-23T00:10:00.000+0000', 57),
    new DayRecord("104.16.109.18", '2018-04-23T00:15:00.000+0000', 46),
    new DayRecord("104.16.109.18", '2018-04-23T00:20:00.000+0000', 45),
    new DayRecord("104.16.109.18", '2018-04-23T00:25:00.000+0000', 96),
    new DayRecord("104.16.109.18", '2018-04-23T00:30:00.000+0000', 64),
    new DayRecord("104.16.109.18", '2018-04-23T00:35:00.000+0000', 35),
    new DayRecord("104.16.109.18", '2018-04-23T00:40:00.000+0000', 74),
    new DayRecord("104.16.109.18", '2018-04-23T00:45:00.000+0000', 36),
    new DayRecord("104.16.109.18", '2018-04-23T00:50:00.000+0000', 75),
    new DayRecord("104.16.109.18", '2018-04-23T00:55:00.000+0000', 53),
    new DayRecord("104.16.109.18", '2018-04-23T00:00:00.000+0000', 63) ];

export const ServersList: AcctServer[] =
  [ new AcctServer("104.16.109.18", "104.16.109.12"),
    new AcctServer("104.15.109.18", "104.16.101.18"),
    new AcctServer("104.17.109.18", "104.16.102.18"),
    new AcctServer("104.165.109.18", "104.16.105.18"),
    new AcctServer("104.13.109.18", "104.16.103.12"),
    new AcctServer("104.12.109.18", "104.16.109.18") ];

export const YtList: YtRecord[] =
  [ new YtRecord("12:34:56", "2018-04-20T13:00:00.000+0000"),
    new YtRecord("00:10:50", "2018-04-20T13:00:00.000+0000"),
    new YtRecord("01:10:00", "2018-04-20T13:00:00.000+0000"),
    new YtRecord("00:00:20", "2018-04-20T13:00:00.000+0000"),
    new YtRecord("00:00:20", "2018-04-20T13:00:00.000+0000"),
    new YtRecord("00:00:20", "2018-04-20T13:00:00.000+0000") ];

export const BytesList: ServerBytes[] =
  [ new ServerBytes("104.16.109.18", 10),
    new ServerBytes("104.16.109.18", 24),
    new ServerBytes("104.16.109.18", 2),
    new ServerBytes("104.16.109.18", 53),
    new ServerBytes("104.16.109.18", 36),
    new ServerBytes("104.16.109.18", 57) ];
