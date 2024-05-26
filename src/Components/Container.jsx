import Book from "./Book";
import { books } from "../constatnts";
import { Books } from "../constatnts";

const Container = ({ data, cur_tit }) => {

  const bookCategory = Books.filter( current_book =>(current_book.category===cur_tit)
  );
  let filtered;
  if (cur_tit==='All') {
     filtered=Books.map((book) => <Book key={book.id} {...book} />)
  }
  else{
     filtered=bookCategory.map((book) => <Book key={book.id} {...book} />);

  }

  let val;
  if (data == 0) {
    val = true;
  } else {
    val = false;
  }

  return (
    <section
      className={`w-full  bg-white rounded-xl p-3 ${
        val
          ? "grid grid-cols-3 gap-4"
          : "grid grid-cols-3 gap-3  "
      } `}
    >
      {val
        ? books.map((book) => <Book key={book.id} {...book} />)
        :filtered}
      {}
    </section>
  );
};

export default Container;
