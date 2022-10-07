import "./App.css";
import { colors } from "./colors";
import { Category, DishCard } from "./components";

function App() {
  const category = [
    {
      name: "Indian Cuisine",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "American Cuisine",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sapiente inventore velit dignissimos ab voluptas autem ipsam iure repellendus alias, eum suscipit eaque soluta laudantium deleniti enim voluptatibus porro explicabo?",
    },
    {
      name: "Chinese Cuisine",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  const cardArray = [
    {
      id: 1,
      bgColor: colors.primary,
      textColor: "black",
      dishName: "Crispy French Fries",
      dishDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      dishRating: 3,
      dishImg:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/french-fries-recipe.jpg",
    },
    {
      id: 2,
      bgColor: colors.primary,
      textColor: "black",
      dishName: "Paneer Tikka",
      dishDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      dishRating: 2,
      dishImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnR6On_7yTLKHpD-F1526VWWrEBC6CvPncWA&usqp=CAU",
    },
    {
      id: 3,
      bgColor: colors.tertiary,
      textColor: colors.primary,
      dishName: "Macaroon",
      dishDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      dishRating: 4,
      dishImg: "https://cdn.mos.cms.futurecdn.net/7YxbhkJ3mjxsCb6FbfKw3G.jpg",
    },
    {
      id: 4,
      bgColor: colors.primary,
      textColor: "black",
      dishName: "Doughnut",
      dishDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      dishRating: 2.5,
      dishImg: "https://im.whatshot.in/img/2020/Sep/23467-a-1599500861.jpg",
    },
  ];

  return (
    <div className="App">
      <section className="grid grid-2 h-80">
        <DishCard
          dishName="Pizza is a savoury dish of Italian origin"
          dishDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          bgColor={colors.secondary}
          textColor="white"
          dishRating="2"
          dishImg="https://img.etimg.com/thumb/width-640,height-480,imgsize-33806,resizemode-1,msid-45342417/magazines/panache/when-pizza-becomes-peeja-thats-amore.jpg"
        />
        <section className="grid grid-2">
          {cardArray.map(
            ({
              id,
              bgColor,
              textColor,
              dishName,
              dishDesc,
              dishRating,
              dishImg,
            }) => (
              <DishCard
                key={id}
                smallCard={true}
                bgColor={bgColor}
                textColor={textColor}
                dishName={dishName}
                dishDesc={dishDesc}
                dishRating={dishRating}
                dishImg={dishImg}
              />
            )
          )}
        </section>
      </section>
      <section className="grid grid-3 gap-8">
        {category.map(({ name, desc }) => (
          <Category categoryDesc={desc} categoryName={name} key={name} />
        ))}
      </section>
    </div>
  );
}

export default App;
