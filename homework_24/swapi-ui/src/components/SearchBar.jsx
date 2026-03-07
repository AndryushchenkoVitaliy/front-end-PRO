function SearchBar() {
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-md-6">

        <div className="input-group input-group-lg">

          <input
            type="text"
            className="form-control"
            placeholder="Search Star Wars character..."
          />

          <button className="btn btn-warning">
            Search
          </button>

        </div>

      </div>
    </div>
  )
}

export default SearchBar