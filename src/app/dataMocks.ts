import {DayRecord, Server, AcctServer, YtRecord, ServerBytes} from './dataTypes';

export const DaysData: DayRecord[] =
  [ new DayRecord("104.16.109.18", '1514764800', 20),
    new DayRecord("104.16.109.18", '1514851200', 30),
    new DayRecord("104.16.109.18", '1514937600', 16),
    new DayRecord("104.16.109.18", '1515024000', 59),
    new DayRecord("104.16.109.18", '1515110400', 29),
    new DayRecord("104.16.109.18", '1515196800', 25),
    new DayRecord("104.16.109.18", '1515283200', 65),
    new DayRecord("104.16.109.18", '1515369600', 36),
    new DayRecord("104.16.109.18", '1515456000', 58),
    new DayRecord("104.16.109.18", '1515542400', 25),
    new DayRecord("104.16.109.18", '1515628800', 85),
    new DayRecord("104.16.109.18", '1515715200', 75),
    new DayRecord("104.16.109.18", '1515801600', 46),
    new DayRecord("104.16.109.18", '1515888000', 63) ];

export const HoursData: DayRecord[] =
  [ new DayRecord("104.16.109.18", '1514764800', 53),
    new DayRecord("104.16.109.18", '1514851200', 64),
    new DayRecord("104.16.109.18", '1514937600', 75),
    new DayRecord("104.16.109.18", '1515024000', 84),
    new DayRecord("104.16.109.18", '1515110400', 65),
    new DayRecord("104.16.109.18", '1515196800', 34),
    new DayRecord("104.16.109.18", '1515283200', 24),
    new DayRecord("104.16.109.18", '1515369600', 11),
    new DayRecord("104.16.109.18", '1515456000', 64),
    new DayRecord("104.16.109.18", '1515542400', 43),
    new DayRecord("104.16.109.18", '1515628800', 61),
    new DayRecord("104.16.109.18", '1515715200', 18),
    new DayRecord("104.16.109.18", '1515801600', 46),
    new DayRecord("104.16.109.18", '1515888000', 23) ];

export const MinutesData: DayRecord[] =
  [ new DayRecord("104.16.109.18", '1514764800', 75),
    new DayRecord("104.16.109.18", '1514851200', 57),
    new DayRecord("104.16.109.18", '1514937600', 46),
    new DayRecord("104.16.109.18", '1515024000', 45),
    new DayRecord("104.16.109.18", '1515110400', 96),
    new DayRecord("104.16.109.18", '1515196800', 64),
    new DayRecord("104.16.109.18", '1515283200', 35),
    new DayRecord("104.16.109.18", '1515369600', 74),
    new DayRecord("104.16.109.18", '1515456000', 36),
    new DayRecord("104.16.109.18", '1515542400', 75),
    new DayRecord("104.16.109.18", '1515628800', 53),
    new DayRecord("104.16.109.18", '1515715200', 63),
    new DayRecord("104.16.109.18", '1515801600', 53),
    new DayRecord("104.16.109.18", '1515888000', 62) ];

export const ServersList: AcctServer[] =
  [ new AcctServer("104.16.109.18", "104.16.109.12"),
    new AcctServer("104.15.109.18", "104.16.101.18"),
    new AcctServer("104.17.109.18", "104.16.102.18"),
    new AcctServer("104.165.109.18", "104.16.105.18"),
    new AcctServer("104.13.109.18", "104.16.103.12"),
    new AcctServer("104.12.109.18", "104.16.109.18") ];

export const YtList: YtRecord[] =
  [ new YtRecord("00:00:20", "2018-04-20T13:00:00.000+0000"),
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
