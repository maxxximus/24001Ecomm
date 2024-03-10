import Item from '../Model/Item'
const def = 

  [
    new Item("Barbour", [ "L"], 
  `https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0EdoCIq0kNfv7KppApxwq0gvQf4p1ML96PrK0wAdnGtQ7K9TbC30Z0swMQCWjzhoyFsqbP1zANjXI0z_vAMunKDmkGEC9L_4xkAVDzWUqzldi7qC4GjXteQ`, `00001`, 20.88, "pattern" ),
  new Item("Superdry", ["M", "L"], 
  `https://www.retrodesignerwear.com/cdn/shop/products/Superdry-Vintage-Tee-Coastal-Pink-Grit.jpg?v=1606047258&width=900`, `00002`, 23.67 ),
  new Item("Boss", ["S", "M", "L"], 
  `https://www.houseoffraser.co.uk/images/products/32281819_l.jpg`, `03003`, 55.67 ),
  new Item("Barbour", ["S", "M", "L", "XL"], 
  `https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0EdoCIq0kNfv7KppApxwq0gvQf4p1ML96PrK0wAdnGtQ7K9TbC30Z0swMQCWjzhoyFsqbP1zANjXI0z_vAMunKDmkGEC9L_4xkAVDzWUqzldi7qC4GjXteQ`, `00004`, 22.67 ),
  new Item("Sunset", ["S", "M", "L"], 
  `https://i.ebayimg.com/images/g/-GIAAOSwj~BhGC8P/s-l1600.jpg`, `03005`, 24.67 ),
  new Item("Barbour", ["S", "M", "L"], 
  `https://www.houseoffraser.co.uk/images/products/32281819_l.jpg`, `05006`, 26.67 ),
  new Item("Barbour", ["S", "M", "L"], 
  `https://www.houseoffraser.co.uk/images/imgzoom/55/55036001_xxl.jpg`, `00007`, 22.77 ),
  new Item("Sunset", ["S", "M", "L"], 
  `https://spikeleisurewear.co.uk/wp-content/uploads/2020/08/SL211.jpg`, `0008`, 34.67 ),
  new Item("Sunset", [ "M", "L"], 
  `https://www.houseoffraser.co.uk/images/imgzoom/55/55036001_xxl.jpg`, `00009`, 23.65 ),
  new Item("Bristol", ["S", "M", "L"], 
  `https://www.houseoffraser.co.uk/images/imgzoom/59/59764203_xxl.jpg`, `04010`, 21.69 ),
  new Item("Bristol", ["S", "M", "L"], 
  `https://sutsu.com/cdn/shop/products/Sutsu-HeadNorth-Bright-Blue_700x.png?v=1659004732`, `00011`, 22.67 ),
  new Item("Stoke", ["S", "M", "L"], 
  `https://i.ebayimg.com/images/g/-GIAAOSwj~BhGC8P/s-l1600.jpg`, `00012`, 25.68 ),
 new Item("Superdry", ["S", "M", "L", "XL"], 
  `https://sutsu.com/cdn/shop/products/Sutsu-HeadNorth-Bright-Blue_700x.png?v=1659004732`, `00313`, 22.67 ),
  new Item("Barbour", ["S", "M", "L"], 
  `https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS0EdoCIq0kNfv7KppApxwq0gvQf4p1ML96PrK0wAdnGtQ7K9TbC30Z0swMQCWjzhoyFsqbP1zANjXI0z_vAMunKDmkGEC9L_4xkAVDzWUqzldi7qC4GjXteQ`, `000014`, 22.67 ),
  new Item("Bristol", ["S", "M", "L"], 
  `https://www.jackwills.com/images/products/54331501_l_a4.jpg`, `000015`, 24.67 ),
  new Item("Lacoste", ["S", "M", "L"], 
  `https://www.houseoffraser.co.uk/images/imgzoom/59/59764203_xxl.jpg`, `000016`, 22.67 ),
  new Item("Bristol", ["S", "M", "L", "XL", "XXL"], 
  `https://spikeleisurewear.co.uk/wp-content/uploads/2020/08/SL211.jpg`, `00017`, 22.67 ),
  new Item("Bristol", ["S", "M", "L"], 
  `https://i.ebayimg.com/images/g/-GIAAOSwj~BhGC8P/s-l1600.jpg`, `000018`, 22.67 ),
  new Item("Bristol", ["S", "M", "L"], 
  `https://www.houseoffraser.co.uk/images/imgzoom/54/54269923_xxl.jpg`, `000019`, 22.67 ),
  new Item("Bristol", ["S", "M", "L"], 
  `https://www.houseoffraser.co.uk/images/imgzoom/54/54269923_xxl.jpg`, `000020`, 22.67 ),
  new Item("Bristol", ["S", "M", "L"], 
  `https://sutsu.com/cdn/shop/products/Sutsu-HeadNorth-Bright-Blue_700x.png?v=1659004732`, `000021`, 22.67 ),
  new Item("Bristol", ["S", "M", "L"], 
  `https://sutsu.com/cdn/shop/products/Sutsu-HeadNorth-Bright-Blue_700x.png?v=1659004732`, `000022`, 22.67 ),
  new Item("Superdry", ["S", "M", "L"], 
  `https://www.jackwills.com/images/products/54331501_l_a4.jpg`, `000023`, 24.67 ),
  new Item("Bristol", ["S", "M", "L"], 
  `https://www.houseoffraser.co.uk/images/imgzoom/54/54269923_xxl.jpg`, `000024`, 22.67 ),
  new Item("Bristol", ["S", "M", "L", "XL", "XXL"], 
  `https://spikeleisurewear.co.uk/wp-content/uploads/2020/08/SL211.jpg`, `00025`, 22.67 ),
  new Item("Bristol", ["S", "M", "L"], 
  `https://i.ebayimg.com/images/g/-GIAAOSwj~BhGC8P/s-l1600.jpg`, `000026`, 22.67 ),
  new Item("Lacoste", ["S", "M", "L"], 
  `https://www.houseoffraser.co.uk/images/imgzoom/59/59764203_xxl.jpg`, `000027`, 24.67 ),
  new Item("Bristol", ["S", "M", "L"], 
  `https://sutsu.com/cdn/shop/products/Sutsu-HeadNorth-Bright-Blue_700x.png?v=1659004732`, `000028`, 22.67 ),
  new Item("Bristol", ["S", "M", "L", "XL", "XXL"], 
  `https://spikeleisurewear.co.uk/wp-content/uploads/2020/08/SL211.jpg`, `00029`, 22.67 ),
  new Item("Bristol", ["S", "M", "L"], 
  `https://i.ebayimg.com/images/g/-GIAAOSwj~BhGC8P/s-l1600.jpg`, `000030`, 22.67 ),


  

  

]



export {def}