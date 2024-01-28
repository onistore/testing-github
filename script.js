alert ("yang pake HP tolong pake mode dekstop")

alert ("rekomendasi donghua bisa DM judulnya ke wa atau discord")

alert ("insya allah saya akan buat kan jika tidak ada ke sibukan")

alert ("jangan lupa donate dengan pencet 'DOTANE HERE' diatas")

alert ("terimakasih")

const product = [
  {
      id: 0,
      title: 'AGAINST THE SKY SUPREME',
  },
  {
      id: 1,
      title: 'AGAINST THE GOD',
  },
  {
      id: 2,
      title: 'ANCIENT MYTH',
  },
  {
      id: 3,
      title: 'APOTHEOSIS',
  },
  {
      id: 4,
      title: 'BATTLE THROUGH THE HEAVENS S1',
  },
  {
      id: 5,
      title: 'BATTLE THROUGH THE HEAVENS S2',
  },
{
    id: 6,
    title: 'BATTLE THROUGH THE HEAVENS S3',
},
{
    id: 7,
    title: 'BATTLE THROUGH THE HEAVENS S4',
},
{
    id: 8,
    title: 'BATTLE THROUGH THE HEAVENS S5',
},
{
    id: 9,
    title: 'DUBU XIAOYAO',
},
{
    id: 10,
    title: 'GOD OF WAR',
},
{
    id: 11,
    title: 'LEGEND OF ASSASIN',
},
{
  id: 12,
  title: 'LEGEND OF XIANWU',
},
  {
    id: 13,
    title: 'LEGENDARY TWINS',
  },
{
  id: 14,
  title: 'LIAN QI SHI WAN NIAN',
},
{
  id: 15,
  title: 'MAGIC CHEF OF ICE AND FIRE',
},
  {
    id: 16,
    title: 'MASTER ALCEMIST',
  },
{
  id: 17,
  title: 'PERFECT WORLD',
},
{
  id: 18,
  title: 'RENEGADE IMMORTAL',
},
{
  id: 19,
  title: 'SHROUDING THE HEAVENS',
},
{
    id: 20,
    title: 'SUPREME GOD EMPEROR',
},
{
    id: 21,
    title: 'SWALLOWED STAR S1',
},
{
    id: 22,
    title: 'SWALLOWED STAR S2',
},
{
    id: 23,
    title: 'SWALLOWED STAR S3',
},
{
  id: 24,
  title: 'THE DEMON HUNTER',
},
{
  id: 25,
  title: 'THE GREAT RULER',
},
{
  id: 26,
  title: 'THRONE OF SEAL',
},
{
  id: 27,
  title: 'WU DONG QIAN KUN S1',
},
{
  id: 28,
  title: 'WU DONG QIAN KUN S2',
},
{
  id: 29,
  title: 'WU DONG QIAN KUN S3',
},
{
  id: 30,
  title: 'WU DONG QIAN KUN S4',
},
{
  id: 31,
  title: 'XI XING JI S1',
},
{
  id: 32,
  title: 'XI XING JI S2',
},
{
  id: 33,
  title: 'XI XING JI S3',
},
{
  id: 34,
  title: 'XI XING JI S4',
},
{
  id: 35,
  title: 'XI XING JI S5',
},
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
      return (
          item.title.toLowerCase().includes(searchData)
      )
  })
  displayItem(filteredData)
});

const displayItem = (items) => {
  document.getElementById('root').innerHTML = items.map((item) => {
      var { image, title } = item;
      return (
          ` 
<div class='bottom'>
                  <a id="1" href="https://beli.onistore.my.id/back.html"><button><p> ${title}</p></button></a>
              </div>
          </div>`
      )
  }).join('')
};
displayItem(categories);

function myFunction() {
  document.getElementById("0").innerHTML = "Hello World";
}
