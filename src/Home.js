import "./css/main.css";
const Home = () => {
  var day = 10;
  var month = 10;
  var str = "K18-Đại học Gia Định";
  var dssv = ["Nguyễn Văn An", "Trần Văn Ba", "Nguyễn Văn Cường"];
  var ds2 = [
    { id: "001", hoten: "Nguyễn Thị An", lop: "K18", gioitinh: false },
    { id: "002", hoten: "Trần Văn Ba", lop: "K18", gioitinh: true },
    { id: "003", hoten: "Nguyễn Văn Cường", lop: "K18", gioitinh: true },
    { id: "007", hoten: "Nguyễn Văn Bảy", lop: "phicong", gioitinh: true },
  ];

  const TestSuaDL = (id) => {
    array2.map((item) => {
      if (item.id === id) {
        item.hoten = "Ronaldo";
        console.log("item.hoten=" + item.hoten);
      }
      return item;
    });
  };

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
            <td>Giới tính</td>
            <td>Sửa DL</td>
          </tr>
          {ds2.map((sv) => {
            return (
              <tr>
                <td>{sv.id}</td>
                <td>
                  <input type="textbox" value={sv.hoten} />
                </td>
                <td>{sv.lop}</td>
                <td>
                  <input type="checkbox" checked={sv.gioitinh} />
                </td>
                <td>
                  <input
                    type="button"
                    value="Sửa"
                    onClick={TestSuaDL.bind(this, x.id)}
                  />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Home;
