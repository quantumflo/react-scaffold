import RestoMenuItems from "./RestoMenuItems";
import {useState} from 'react';

const RestoCategory = ({ data }) => {
    const [showContent, setShowContent] = useState(false);
    const {title, itemCards } = data;

    const onShowContentClick = () => {
        setShowContent(!showContent);
    }

    console.log(data)


  return (
    <div className="category-container">
        <div className="flex justify-between w-6/12 mx-auto mb-4 p-4 shadow-lg">
            <h1 className="font-bold text-lg">{title}</h1>

      <button className="category-button" onClick={onShowContentClick}>
        {showContent? "⬆️":'⬇️' }
      </button>
      </div>

      {showContent && <RestoMenuItems itemCards={itemCards} /> }
    </div>
  );
};

export default RestoCategory;