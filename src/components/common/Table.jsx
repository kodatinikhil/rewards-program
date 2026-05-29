import PropTypes from "prop-types";

export const Table = ({ columns, data, renderRow }) => {
  if (!data?.length) {
    return <p>No data available</p>;
  }

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) =>
          renderRow ? (
            renderRow(item, index)
          ) : (
            <tr key={index}>
              {Object.values(item).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.array.isRequired,
  renderRow: PropTypes.func,
};