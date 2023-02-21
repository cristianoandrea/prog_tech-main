async function deleteOne(id) {
    fetch( "http://localhost:4000/api/item/delete/" + id,
      {
        method: "PATCH",
      })
      .then(res =>
        res.json()).then(d => {
            console.log(d)})
      .catch(function (err) {
        console.log("Unable to fetch -", err);
      });
    }
   

  async function addOne(id) {
    const response = await fetch(
      "http://localhost:4000/api/item/add/" + id,
      {
        method: "PATCH",
      }
    );
  }
  

