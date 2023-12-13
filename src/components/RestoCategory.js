import RestoMenuItems from "./RestoMenuItems";

const RestoCategory = ({ data, showContent, setCategoryIndex }) => {
    const { title, itemCards } = data;

    const onShowContentClick = () => {
        setCategoryIndex()
    }

  return (
    <div className="category-container">
        <div className="flex justify-between w-6/12 mx-auto mb-4 p-4 shadow-lg bg-whitesmoke" onClick={onShowContentClick}>
            <h1 className="font-bold text-lg">{title } ({itemCards.length})</h1>

      <div className="category-button" >
        {showContent? "⬆️":'⬇️' }
      </div>
      </div>

      {showContent && <RestoMenuItems itemCards={itemCards} /> }
    </div>
  );
};

export default RestoCategory;