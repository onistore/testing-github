alert ("yang pake HP tolong pake mode dekstop")

alert ("rekomendasi donghua bisa DM judulnya ke wa atau discord")

alert ("insya allah saya akan buat kan jika tidak ada ke sibukan")

alert ("jangan lupa donate dengan pencet 'DOTANE HERE' diatas")

alert ("terimakasih")

const product = [
  {
      id: 1,
      title: 'AGAINST THE SKY SUPREME',
  },
  {
      id: 2,
      title: 'AGAINST THE GOD',
  },
  {
      id: 3,
      title: 'APOTHEOSIS',
  },
{
    id: 4,
    title: 'BATTLE THROUGH THE HEAVENS S5',
},
{
    id: 5,
    title: 'GOD OF WAR',
},
  {
  id: 6,
  title: 'JADE DYNASTY',
},
{
  id: 7,
  title: 'LIAN QI SHI WAN NIAN',
},
{
  id: 8,
  title: 'MAGIC CHEF OF ICE AND FIRE',
},
  {
    id: 9,
    title: 'MASTER ALCEMIST',
  },
{
  id: 10,
  title: 'PERFECT WORLD',
},
{
  id: 11,
  title: 'RENEGADE IMMORTAL',
},
{
    id: 12,
    title: 'SWALLOWED STAR S3',
},
{
  id: 13,
  title: 'THE GREAT RULER',
},
{
  id: 14,
  title: 'THRONE OF SEAL',
},
{
  id: 15,
  title: 'WU DONG QIAN KUN S4',
},
{
  id: 16,
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

