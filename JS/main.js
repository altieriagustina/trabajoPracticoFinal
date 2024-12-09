let articulos = document.getElementById("frutos-secos")
let totalText = document.getElementById("totalText")

const articles = [
    {
        producto: "Maní sin sal", descripcion: `El maní sin sal es un fruto seco natural, rico en proteínas, grasas saludables y fibra. Ofrece un sabor suave y cremoso, ideal para consumir como snack, en recetas o como complemento nutritivo en una dieta balanceada.`, precio: 150000, stock: 10, path_img: `../IMAGES/image1.png`,
    },
    {
        producto: "Nueces", descripcion: `Las nueces son frutos secos con un sabor suave y mantecoso, reconocidos por su alto contenido de ácidos grasos omega-3, antioxidantes y fibra. Son ideales como snack, en ensaladas, postres o como ingrediente en recetas saludables.`, precio: 140000, stock: 8, path_img: `../IMAGES/image2.png`,
    },
    {
        producto: "Almendras", descripcion: `Las almendras son frutos secos crujientes y nutritivos, ricos en vitamina E, proteínas y grasas saludables. Su sabor suave y ligeramente dulce las hace perfectas como snack, en repostería o para enriquecer recetas saludables.`, precio: 200000, stock: 4, path_img: `./IMAGES/image3.png`,
    },
]

function pintarArticulos(arrayProductos) {
    for (let i = 0; i < arrayProductos.length; i++) {
        articulos.innerHTML += `
            <div class="article">
                <img src="${articles[i].path_img}" alt="Imagen de Fruto Seco">
                <h3 class="title">${articles[i].producto}</h3>
                <p class="description">${articles[i].descripcion} </p>
                <h4 class="precio">Precio: $ ${articles[i].precio} </h4>
                <input type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly>
                <input type="number" id="entrada${i}" placeholder = "Ingrese cantidad">
                <button class="btnAddToCart" id="btnAddToCart${i}">Agregar al carrito</button>
            </div>`;
    }

    for (let i = 0; i < arrayProductos.length; i++) {
        document.getElementById(`btnAddToCart${i}`).addEventListener("click", () => {
            comprar(i);
        });
    }
}

let total = 0;

function comprar(index) {
    const stockElement = document.getElementById(`stock${index}`);
    const entradaElement = document.getElementById(`entrada${index}`);
    const stock = parseInt(stockElement.value);
    const cantidad = parseInt(entradaElement.value);
    const precio = articles[index].precio;

    if (cantidad > 0 && cantidad <= stock) {
        total += cantidad * precio;
        totalText.innerHTML = `Total en su carrito: $ ${total}`;
        stockElement.value = stock - cantidad;
        alert(`Compra realizada con éxito. Total: $${total}`);
    } else {
        alert(`Cantidad no válida, debe ser mayor que 0 y menor o igual al stpck disponible`);
    }
}

pintarArticulos(articles)