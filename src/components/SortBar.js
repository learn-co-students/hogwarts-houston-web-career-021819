import React from 'react'

const SortBar = ({sort, greasedCheck, handleChange, handleCheck}) => (
  <div className="ui form">
    <div className="grouped fields">
      <label> Sort by: </label>
      <form onChange={handleChange}>
        <div className="field">
          <div class="ui radio checkbox">
            <label> Unsorted: </label>
            <input type="radio" name="property" value="all" checked={sort === "all"} />
          </div>
        </div>
        <div className="field">
          <div class="ui radio checkbox">
            <label> Name: </label>
            <input type="radio" name="property" value="name" checked={sort === "name"}/>
          </div>
        </div>
        <div className="field">
          <div class="ui radio checkbox">
            <label> Weight: </label>
            <input type="radio" name="property" value="weight" checked={sort === "weight"}/>
          </div>
        </div>
      </form>
        <label>The greasy ones: </label>
        <div className="">
          <input type="checkbox" name="greasedCheck" checked={greasedCheck} onChange={handleCheck} />
        </div>
    </div>
  </div>
)

export default SortBar

// <div>
//   <form onChange={handleChange}>
//     All:
//     <input type="radio" name="property" value="all" checked={sort === "all"} />
//     Name:
//     <input type="radio" name="property" value="name" checked={sort === "name"}/>
//     Weight:
//     <input type="radio" name="property" value="weight" checked={sort === "weight"}/>
//   </form>
//   <form onChange={handleCheck}>
//     Greased filter:
//     <input type="checkbox" name="greasedCheck" checked={greasedCheck} />
//   </form>
// </div>
