import "./App.css";
import { colors } from "./colors";
import { Category, ChefCard, DishCard, FoodCategory } from "./components";
import { GiKnifeFork } from "react-icons/gi";
import carrot from "./images/carrot.png";
import avo from "./images/avo.png";
import grain from "./images/grain.png";
import orange from "./images/orange.png";
import meal from "./images/full.png";
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

  const foods1 = [
    {
      id: 1,
      type: "Vegetables",
      img: carrot,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      type: "Fruits",
      img: orange,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];
  const foods2 = [
    {
      id: 1,
      type: "Whole Grains",
      img: grain,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      type: "Healthy Protein",
      img: avo,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="App">
      <section className="pt-1">
        <i className="flex center pb-1 items-center">
          <GiKnifeFork color="#e6c12d" />
          Culinary Kitchen
        </i>
        <hr className="line"></hr>
        <section className="heading flex flex-col items-center">
          <h2>VARIETIES</h2>
          <div className="line-under"></div>
        </section>
      </section>
      <div className="app-holder">
        <section className="grid grid-2 h-80">
          <DishCard
            dishName="Pizza is a savoury dish of Italian origin"
            dishDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            bgColor={colors.secondary}
            textColor="white"
            dishRating="2"
            dishImg="https://static3.bigstockphoto.com/5/8/1/large1500/185885002.jpg"
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
        <div>
          <section className="heading flex flex-col items-center">
            <h2>TOP CHEFS</h2>
            <div className="line-under"></div>
          </section>
          <section className="chef-blk flex space-bw gap-1">
            <ChefCard
              selected={false}
              chefImg="https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5343.jpg?w=2000"
              chefName="Robert Jr"
              chefDesg="Marinn Hotels, USA"
              chefDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <ChefCard
              selected={true}
              chefImg="https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5343.jpg?w=2000"
              chefName="Mark Henry"
              chefDesg="LukeWarm Residencies, U.K."
              chefDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <ChefCard
              selected={false}
              chefImg="https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5343.jpg?w=2000"
              chefName="Ramaswamy I."
              chefDesg="WarmStreet, India"
              chefDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </section>
          <section className="grid grid-mid-3 food-guide">
            <section className="flex flex-col space-around">
              {foods1.map(({ id, type, img, desc }) => (
                <FoodCategory
                  foodType={type}
                  foodDesc={desc}
                  foodImg={img}
                  key={id}
                />
              ))}
            </section>
            <picture className="flex flex-col items-center">
              <section className="heading flex flex-col items-center">
                <h2>FOOD GUIDE</h2>
                <div className="line-under"></div>
              </section>
              <img src={meal} alt="food types" className=" w-full" />
            </picture>
            <section className="flex flex-col space-around">
              {foods2.map(({ id, type, img, desc }) => (
                <FoodCategory
                  foodType={type}
                  foodDesc={desc}
                  foodImg={img}
                  key={id}
                />
              ))}
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
