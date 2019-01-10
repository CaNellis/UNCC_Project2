var data = {
  Year: [
    1999, 
    2000, 
    2001, 
    2002, 
    2003, 
    2004, 
    2005, 
    2006, 
    2007, 
    2008, 
    2009, 
    2010, 
    2011, 
    2012, 
    2013, 
    2014, 
    2015, 
    2016
    ],
  Alzheimers: [
    16.5, 
    18.1,
    19.3,
    20.8,
    22.1,
    22.6,
    24,
    23.7,
    23.8,
    25.8,
    24.2,
    25.1,
    24.7,
    23.8,
    23.5,
    25.4,
    29.4,
    30.3
    ], 
  CLRD: [
    45.4,
    44.2,
    43.9,
    43.9,
    43.7,
    41.6,
    43.9,
    41,
    41.4,
    44.7,
    42.7,
    42.2,
    42.5,
    41.5,
    42.1,
    40.5,
    41.6,
    40.6
  ], 
  Cancer: [
    200.8,
    199.6,
    196.5,
    194.3,
    190.9,
    186.8,
    185.1,
    181.8,
    179.3,
    176.4,
    173.5,
    172.8,
    169,
    166.5,
    163.2,
    161.2,
    158.5,
    155.8
  ], 
  Diabetes: [
    25,
    25.1,
    25.4,
    25.6,
    25.5,
    24.8,
    24.9,
    23.6,
    22.8,
    22,
    21.1,
    20.8,
    21.7,
    21.2,
    21.2,
    20.9,
    21.3,
    21
  ], 
  Heart: [
    266.5,
    257.6,
    249.5,
    244.6,
    236.3,
    221.6,
    216.8,
    205.5,
    196.1,
    192.1,
    182.8,
    179.1,
    173.7,
    170.5,
    169.8,
    167,
    168.5,
    165.5
  ],  
  Influenza: [
    23.5, 
    23.7,
    22.2,
    23.2,
    22.6,
    20.4,
    21,
    18.4,
    16.8,
    17.6,
    16.5,
    15.1,
    15.7,
    14.5,
    15.9,
    15.1,
    15.2,
    13.5
  ],  
  Kidney: [
    13,
    13.5,
    14.1,
    14.4,
    14.7,
    14.5,
    14.7,
    14.8,
    14.9,
    15.1,
    15.1,
    15.3,
    13.4,
    13.1,
    13.2,
    13.2,
    13.4,
    13.1
  ], 
  Stroke: [
    61.6,
    60.9,
    58.4,
    57.2,
    54.6,
    51.2,
    48,
    44.8,
    43.5,
    42.1,
    39.6,
    39.1,
    37.9,
    36.9,
    36.2,
    36.5,
    37.6,
    37.3
  ], 
  Suicide: [
    10.5,
    10.4,
    10.7,
    11,
    10.8,
    11,
    10.9,
    11,
    11.3,
    11.6,
    11.8,
    12.1,
    12.3,
    12.6,
    12.6,
    13,
    13.3,
    13.5
  ], 
  Unintentional: [
    35.3,
    34.9,
    35.7,
    37.1,
    37.6,
    38.1,
    39.5,
    40.2,
    40.4,
    39.3,
    37.5,
    38,
    39.1,
    39.1,
    39.4,
    40.5,
    43.2,
    47.4]
  }

var data2 = {
  Cause: ["Alzheimer's disease", 'Cancer', 'CLRD', 'Diabetes', 'Heart disease', 'Influenza and pneumonia', 'Kidney disease', 'Stroke', 'Suicide', 'Unintentional injuries'],
  Rates2016: [30.3, 155.8, 40.6, 21.0, 165.5, 13.5, 13.1, 37.3, 13.5, 47.4],
  Rates2008: [25.8, 176.4, 44.7, 22.0, 192.1, 17.6, 15.1, 42.1, 11.6, 39.3],
  Rates1999: [16.5, 200.8, 45.4, 25.0, 266.5, 23.5, 13.0, 61.6, 10.5, 35.3]
}

var data4 = {
  Cause: [
    'Heart disease', 'CLRD', 'Unintentional injuries', 'Cancer', 'Stroke', "Alzheimer's disease", 'Diabetes', 'Influenza and pneumonia', 'Kidney disease', 'Suicide'], 
  Percents2016: [
    31.230227926684723, 29.40034481758442, 7.933360830905173, 7.600145320898139, 6.987890089026257, 5.7077781585049845, 3.9357579374658025, 2.5336275802939747, 2.4603280339055877, 2.2105393047309425],
  Percents2008: [
    32.93295553985865, 30.190856180601937, 7.532911439037555, 7.162272334850167, 6.508448297126346, 4.401272623694528, 3.766882846115364, 3.0050491702798907, 2.5754132049390788, 1.9239383634964797], 
  Percents1999: [
    38.051322628613526, 28.85037773647752, 8.781809042378477, 6.515862413462719, 5.134781454340533, 3.5889425372515644, 3.343956898478665, 2.336834527391273, 1.8640211645764095, 1.5320915970293196],  
  }