import soup from "../../assets/restaurantMenus/25097.jpg";
import mainMeal from "../../assets/restaurantMenus/garlic-butter-prime-rib-FT-RECIPE0621-fca73e5fa8e046b0b03982757db51628.jpg";
import hotMeal from "../../assets/restaurantMenus/Hot_meal_header_copy.jpg";
import salad from "../../assets/restaurantMenus/salmon-nicoise-salad-FT-RECIPE0221-984254ccb3734468836570330b4ff897.jpg";
import cocacola from "../../assets/restaurantMenus/cocacola_can.png";

export const dummyMenu = [
  {
    id: 1,
    category: "Suplar",
    subCategory: true,
    content: [
      {
        id: 1,
        subCategory: "adi suplar",
        content: [
          {
            id: 1,
            categoryId: 1,
            subCategoryId: 1,
            name: "Tomat supu",
            price: 8,
            amount: 8,
            count: 1,
            img: soup,
            rating: 3,
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
          },
          {
            id: 2,
            categoryId: 1,
            subCategoryId: 1,
            name: "Mərci supu",
            price: 8,
            amount: 8,
            img: soup,
            rating: 4,
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            count: 1,
            category: "soups",
          },
          {
            id: 3,
            categoryId: 1,
            subCategoryId: 1,
            name: "Toyuq Tərəvəz şorbası",
            price: 8,
            amount: 8,
            img: soup,
            rating: 5,
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            count: 1,
            category: "soups",
          },
          {
            id: 4,
            categoryId: 1,
            subCategoryId: 1,
            name: "Əriştə",
            price: 8,
            amount: 8,
            img: soup,
            rating: 6,
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            count: 1,
            category: "soups",
          },
        ],
      },
      {
        id: 2,
        subCategory: "Əriştələr",
        content: [
          {
            id: 1,
            categoryId: 1,
            subCategoryId: 2,
            name: "Eriste 1",
            price: 8,
            amount: 8,
            count: 1,
            img: soup,
            rating: 3,
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
          },
          {
            id: 2,
            categoryId: 1,
            subCategoryId: 2,
            name: "Eriste 2",
            price: 8,
            amount: 8,
            count: 1,
            img: soup,
            rating: 3,
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "isti qəlyanaltılar",
    subCategory: false,
    content: [
      {
        id: 1,
        categoryId: 2,
        subCategoryId: 0,
        name: "Qızardılmış Krivetler",
        price: 6,
        amount: 6,
        img: hotMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "hot meal",
      },
      {
        id: 2,
        categoryId: 2,
        subCategoryId: 0,
        name: "Qızardılmış Toyuq Filesi",
        price: 8,
        amount: 8,
        img: hotMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "hot meal",
      },
      {
        id: 3,
        categoryId: 2,
        subCategoryId: 0,
        name: "Qızardılmış Kalimar",
        price: 12,
        amount: 12,
        img: hotMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "hot meal",
      },
      {
        id: 4,
        categoryId: 2,
        subCategoryId: 0,
        name: "Pendirli Börək",
        price: 20,
        amount: 20,
        img: hotMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "hot meal",
      },
    ],
  },
  {
    id: 3,
    category: "əsas yemeklər",
    subCategory: false,
    content: [
      {
        id: 1,
        categoryId: 3,
        subCategoryId: 0,
        name: "Qızardılmış qızılbalıq",
        price: 20,
        amount: 20,
        img: mainMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "main meal",
      },
      {
        id: 2,
        categoryId: 3,
        subCategoryId: 0,
        name: "Kremli qızılbalıq filesi",
        price: 20,
        amount: 20,
        img: mainMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "main meal",
      },
      {
        id: 3,
        categoryId: 3,
        subCategoryId: 0,
        name: "Mal əti Tagliata",
        price: 20,
        amount: 20,
        img: mainMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "main meal",
      },
      {
        id: 4,
        categoryId: 3,
        subCategoryId: 0,
        name: "Mal əti medalyonu",
        price: 20,
        amount: 20,
        img: mainMeal,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "main meal",
      },
    ],
  },
  {
    id: 4,
    category: "saladlar",
    subCategory: false,
    content: [
      {
        id: 1,
        categoryId: 4,
        subCategoryId: 0,
        name: "Toyyuqlu Sezar",
        price: 20,
        amount: 20,
        img: salad,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "salads",
      },
      {
        id: 2,
        categoryId: 4,
        subCategoryId: 0,
        name: "Krivetkali Sezar",
        price: 20,
        amount: 20,
        img: salad,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "salads",
      },
      {
        id: 3,
        categoryId: 4,
        subCategoryId: 0,
        name: "Qızıl Balıq Salatı",
        price: 20,
        amount: 20,
        img: salad,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "salads",
      },
      {
        id: 4,
        categoryId: 4,
        subCategoryId: 0,
        name: "Yunan Salati",
        price: 20,
        amount: 20,
        img: salad,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "salads",
      },
    ],
  },
  {
    id: 5,
    category: "içkilər",
    subCategory: false,
    content: [
      {
        id: 1,
        categoryId: 5,
        subCategoryId: 0,
        name: "Coca-Cola",
        price: 3,
        amount: 3,
        img: cocacola,
        rating: 6,
        description:
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        count: 1,
        category: "drinks",
      },
    ],
  },
];
