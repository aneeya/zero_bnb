type Host = {
  name_: string,
  type: string,
  placeholder: string,
  required: boolean
}[]



export const hostInfo= [
  { name_: 'profileImage',
    label_: '이미지',
    type: 'file',
    placeholder: '이미지를 등록하세요',
    required: true,
  },
  { name_: 'name',
    label_: '호스트명',
    type: 'text',
    placeholder: '이름을 입력하세요',
    required: true,
  },
  { name_: 'businessContact',
    label_: '연락처',
    type: 'tel',
    placeholder: '연락처를 입력하세요',
    required: true,
  },
  { name_: 'companyRegistrationNumber',
    label_: '사업자 등록 번호',
    type: 'text',
    placeholder: '사업자 등록 번호를 입력하세요',
    required: true,
  },
  { name_: 'email',
    label_: '이메일',
    type: 'email',
    placeholder: 'email를 입력하세요',
    required: true
  },
]


export const hostRegister: Host = [
  { name_: 'profileImage',
    type: 'file',
    placeholder: '이미지를  등록하세요',
    required: true
  },
  { name_: 'name',
    type: 'text',
    placeholder: '이름을 입력하세요',
    required: true,
  },
  { name_:'businessContact',
    type: 'tel',
    placeholder: '연락처를 입력하세요',
    required: true
  },
  { name_: 'companyRegistrationNumber',
    type: 'text',
    placeholder: '사업자 등록 번호를 입력하세요',
    required: true
  },
  { name_: 'email',
    type: 'email',
    placeholder: 'email를 입력하세요',
    required: true
  },
]


// room register ///

const roomType = [
  {
    label: ['펜션', '호텔', '모텔', '빌라', '게스트하우스' ],
    type: 'radio',
    name: 'type',
  }
]

const roomDescription = [
  {
    label_: 'DESCRIPTION',
    name_: 'description',
    style: {
      rows: 5,
      cols: 30,
      defaultvalue: '숙소설명'
    }
  }
]

const roomInput = [
  {
    name: 'address',
    type: 'text', 
    placeholder: '주소를 입력하세요'
  },
  {
    name: 'name',
    type: 'text', 
    placeholder: '숙소명를을 입력하세요'
  },
  {
    name: 'notice',
    type: 'text', 
    placeholder: '공지사항을 입력하세요'
  },
  {
    name: 'policy',
    type: 'text', 
    placeholder: '정책사항을 입력하세요'
  },
]

const event = [
  {
    name_: 'eventInputs',
    label_: 'EVENT', 
    lists: [
      {
        name: 'description',
        type: 'text',
        placeholder: '이벤트를 추가해 보세요'
      },
    ]
  },
]

const comforts = [
  {
    $name: 'popularFacilityServiceType',
    $type: 'checkbox',
    $list: [
      {
        value_: 'PARKING\n(주차 가능)',
      },
      {
        value_: 'BREAKFAST\n(조식 운영)',
      },
      {
        value_: 'WIFI\n(와이파이)',
      },
      {
        value_: 'NO_SMOKING\n(객실금연)',
      },
      {
        value_: 'FITNESS\n(피트니스)',
      },
      {
        value_: 'TWENTY_FOUR_HOUR_DESK\n(24시 데스크)',
      },
      {
        value_: 'BATHS\n(목욕탕)',
      },
      {
        value_: 'LAUNDRY\n(무료 세탁)',
      },
      {
        value_: 'RESTAURANT\n(레스토랑)',
      },
      {
        value_: 'COFFEE_SHOP\n(커피샵)',
      },
      {
        value_: 'BAR\n(바)',
      },
      {
        value_: 'BANQUET_HALL\n(연회장)',
      },
      {
        value_: 'LUGGAGE_STORAGE\n(수화물 보관)',
      },
    ],
  },
]

const comfortsService = [
  'PARKING\n(주차 가능)',
  'BREAKFAST\n(조식 운영)',
  'WIFI\n(와이파이)',
  'NO_SMOKING\n(객실금연)',
  'FITNESS\n(피트니스)',
  'TWENTY_FOUR_HOUR_DESK\n(24시 데스크)',
  'BATHS\n(목욕탕)',
  'LAUNDRY\n(무료 세탁)',
  'RESTAURANT\n(레스토랑)',
  'COFFEE_SHOP\n(커피샵)',
  'BAR\n(바)',
  'BANQUET_HALL\n(연회장)',
  'LUGGAGE_STORAGE\n(수화물 보관)'
]

export { roomType, roomDescription, roomInput, event, comforts, comfortsService}






//   "accommodationImageInputs": [
//     {
//       "url": "https://test/test1.png"
//     },
//     {
//       "url": "https://test/test2.png"
//     },
//     {
//       "url": "https://test/tes3.png"
//     },
//     {
//       "url": "https://test/tes4.png"
//     },
//     {
//       "url": "https://test/test5.png"
//     }
//   ]
// }