interface List {
  active: boolean
}

const list = {
  active: false
}

export default function fetchData() {
  return new Promise<List>((resolve, reject) => {
    setTimeout(() => {
      resolve(list)
      reject('오류입니다')  
    },2000);
  });
};

export  async function isActive() {
  const res = await fetchData()
  return res
}