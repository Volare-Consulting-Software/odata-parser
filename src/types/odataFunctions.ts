export enum ODataFunctions {
  // String functions
  Contains = 'contains',
  StartsWith = 'startswith',
  EndsWith = 'endswith',
  Length = 'length',
  IndexOf = 'indexof',
  Substring = 'substring',
  ToLower = 'tolower',
  ToUpper = 'toupper',
  Trim = 'trim',
  Concat = 'concat',
  
  // Date and time functions
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Minute = 'minute',
  Second = 'second',
  FractionalSeconds = 'fractionalseconds',
  TotalSeconds = 'totalseconds',
  Date = 'date',
  Time = 'time',
  TotalOffsetMinutes = 'totaloffsetminutes',
  MinDateTime = 'mindatetime',
  MaxDateTime = 'maxdatetime',
  Now = 'now',
  
  // Math functions
  Round = 'round',
  Floor = 'floor',
  Ceiling = 'ceiling',
  
  // Type functions
  IsOf = 'isof',
  Cast = 'cast',
  
  // Collection functions
  All = 'all',
  Any = 'any',
  Filter = 'filter',
  
  // Spatial functions
  Distance = 'geo.distance',
  GeoLength = 'geo.length',
  Intersects = 'geo.intersects',
  
  // Other
  Count = 'count',
  Ref = 'ref',
  Value = 'value'
}