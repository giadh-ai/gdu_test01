import "./css/main.css";
const Home = () => {
  var day = 10;
  var month = 10;
  var str = "K18-Đại học Gia Định";
  var dssv = ["Nguyễn Văn An", "Trần Văn Ba", "Nguyễn Văn Cường"];
  var ds2 = [
    { id: "001", hoten: "Nguyễn Văn An", lop: "K18" },
    { id: "002", hoten: "Trần Văn Ba", lop: "K18" },
    { id: "003", hoten: "Nguyễn Văn Cường", lop: "K18" },
  ];

  return (
    <div>
      <div>Xin chào {str}</div>
      <div>
        <p>DANH SÁCH SINH VIÊN </p>
      </div>
      <div>
        {dssv.map((sv) => {
          return <p>{sv}</p>;
        })}
      </div>
      <div>
        <table className="my-table">
          <tr>
            <td>ID</td>
            <td>Họ tên</td>
            <td>Lớp</td>
          </tr>
          {ds2.map((sv) => {
            return (
              <tr>
                <td>{sv.id}</td>
                <td>{sv.hoten}</td>
                <td>{sv.lop}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Home;
