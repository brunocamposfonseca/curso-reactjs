import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Objects/Banner";
import Category, {filterCategory, categories} from "../../components/Objects/Category";
import Card from "../../components/Objects/Card";
import Carroussel from "../../components/Objects/Carrossel";

function Home() {
  return (
    <>
      <Header />
      <Banner imagem="home"/>
      <Container> 
          {categories.map((category, index) => (
            <Category nameCat={category}>
              <Carroussel>
              {filterCategory(index).map(({id}) => (
                <Card id={id} key={id} />
              ))}
              </Carroussel>
            </Category>
              ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
