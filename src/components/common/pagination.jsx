export const Pagination = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  goToPage,
}) => {
  return (
    <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => goToPage(i + 1)}
          style={{
            background: currentPage === i + 1 ? "#38bdf8" : "#1f2937",
            color: "white",
          }}
        >
          {i + 1}
        </button>
      ))}

      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};