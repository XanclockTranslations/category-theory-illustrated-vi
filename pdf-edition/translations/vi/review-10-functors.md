# Ghi chú đối chiếu Chương 7 — Hàm tử

Bản dịch đầy đủ của `_chapters/10_functors.md` tại phiên bản nguồn
`9ea2ea38052e82176cccb25c4e75709dbb064d0d`. Phạm vi gồm toàn bộ văn bản
được xuất bản, định nghĩa, định lý, ví dụ, trích dẫn, 9 bài tập và 9 lời giải,
các đoạn mã và mọi chú thích thay thế của hình.

Đã tự đối chiếu nội dung và cấu trúc. Chưa tuyên bố có người khác duyệt
độc lập hoặc đã kiểm tra bản PDF dựng từ chương này.

## Kết quả kiểm tra cấu trúc

| Nội dung | Nguồn | Bản dịch | Kết quả |
| --- | ---: | ---: | --- |
| Dòng | 772 | 772 | Đủ |
| Khối ngăn bởi dòng trống | 357 | 357 | Đủ, giữ thứ tự |
| Đề mục Markdown kể cả chú thích không in | 43 | 43 | Giữ nguyên chuỗi cấp đề mục |
| Đề mục cấp 1–2 | 12 | 12 | Khớp chính xác `toc.json` |
| Lần xuất hiện hình | 47 | 47 | URL và thứ tự giống hệt |
| Biểu thức toán trong dấu `$`/`$$` | 168 | 168 | Nội dung và thứ tự giống hệt |
| Khối mã có hàng rào | 5 | 5 | Nội dung và thứ tự giống hệt |
| Đoạn mã nội dòng ngoài hàng rào | 17 | 17 | Nội dung và thứ tự giống hệt |
| Thẻ Liquid | 2 | 2 | Giống hệt |
| Dòng thuộc tính Markdown | 19 | 19 | Giống hệt |
| Chú thích HTML | 7 | 7 | Giống hệt |
| Liên kết văn bản | 1 | 1 | URL giữ nguyên |
| Nhãn bài tập và tham chiếu đến bài tập | 19 | 19 | Giữ nguyên thứ tự và số |

Có 18 nhãn cho hai lượt Bài tập 1–9, cùng một tham chiếu đến Bài tập 2 trong
lời giải Bài tập 4. Nguồn có 7.730 đơn vị ngăn bằng khoảng trắng; bản dịch có
9.292 đơn vị, gồm siêu dữ liệu, chú thích, mã và ký hiệu. Phép đếm này không
đánh giá tương đương ngữ nghĩa giữa hai ngôn ngữ. Các tệp dùng UTF-8 không
BOM và xuống dòng LF.

Không sửa nguồn tiếng Anh, tài nguyên hình, hình học của hình, cấu hình hay
mục lục dùng chung. Các nhãn trục tự nhiên trên SVG được xử lý tập trung;
bản dịch này dịch các chú thích thay thế của hình. Chú thích HTML không in
được giữ nguyên bằng tiếng Anh.

## Lựa chọn dịch thuật

- Dùng hàm tử, tự hàm tử, hàm tử đồng nhất, hàm tử có điểm, biến đổi tự
  nhiên, ánh xạ đối tượng, ánh xạ cấu xạ, bảo toàn đồng nhất và bảo toàn
  phép hợp thành.
- Dùng phạm trù, cấu xạ, tập hợp, hàm, monoid, nhóm, đồng cấu nhóm, đồng
  cấu monoid, thứ tự, bảo toàn thứ tự và hàm đơn điệu theo thuật ngữ chung.
- Dùng “đối tượng đầu”, “đối tượng cuối” và “tập hợp đơn phần tử” để khớp
  các chương trước; dùng “kiểu tổng quát”, “kiểu đa hình”, “cấp kiểu”,
  “cấp giá trị”, “phép cộng mô-đun” và “phạm trù chỉ số”.
- “Ball” là “quả bóng”. Viết “minh hoạ” theo lựa chọn của người dùng.
- Giữ ký hiệu, định danh kiểu/hàm, mã nguồn và tên riêng. Các từ Latin
  `per se`, `par excellence` trong trò đùa của tác giả được giữ bằng chữ
  nghiêng; lời TODO xuất hiện trong văn bản hiển thị cũng được dịch,
  không bị xoá đi.
- Giữ giọng kể, suy đoán về nhận thức, lời dè dặt và những câu đùa của
  tác giả. Không biến suy đoán thành kết luận đã được chứng minh.

Không có sửa lỗi cú pháp hiển thị riêng trong chương này. Các dấu nhấn
mạnh chưa đóng ở nguồn được giữ, thay vì âm thầm sửa cấu trúc Markdown.

## Những điểm bất nhất của nguồn được giữ lại

- Định nghĩa đẳng cấu tập hợp lặp lại công thức của Chương 1: với
  `f: A → B`, `g: B → A`, nó viết `f ∘ g = ID_A`, `g ∘ f = ID_B`,
  đảo hai chỉ số so với thứ tự hợp thành đã dùng. Giữ nguyên TeX.
- Định nghĩa đẳng cấu phạm trù nêu các ánh xạ khả nghịch trên đối tượng
  và cấu xạ có cùng chữ ký, nhưng chưa nêu yêu cầu bảo toàn đồng nhất
  và phép hợp thành. Bản dịch không bổ sung điều kiện.
- Đoạn phạm trù hữu hạn nói có thể vẽ bất kỳ tổ hợp điểm/mũi tên nào rồi
  gọi đó là phạm trù; việc có đủ đồng nhất, phép hợp thành và quy luật
  không được nêu trong phát biểu ấy. Giữ nguyên sự rút gọn của nguồn.
- Định nghĩa sơ đồ giới hạn phạm trù chỉ số ở phạm trù hữu hạn. Giữ
  giới hạn này, không mở rộng sang định nghĩa sơ đồ tổng quát hơn.
- Định nghĩa đồng cấu monoid ban đầu chỉ nêu bảo toàn phép toán; điều
  kiện bảo toàn đồng nhất được nêu sau ở phần các quy luật hàm tử.
  Giữ nguyên trình tự, không tự thêm nó vào định nghĩa đầu tiên.
- Ví dụ thời gian đồng nhất `00:00` với `12 PM`, và ví dụ `13 → 1`,
  `14 → 2` dùng chu kỳ 12 nhưng lời dẫn sau nói cơ số 11/mod11.
  Giữ nguyên mọi số, ký hiệu và cách gọi của nguồn.
- Ví dụ `n → 2ⁿ` nói có đồng cấu từ nhóm số nguyên cộng đến số nguyên
  nhân; số nguyên với phép nhân không là nhóm, và số mũ nguyên âm không
  cho số nguyên. Câu “thay 2 bằng bất kỳ số nào” cũng không nêu hạn chế.
  Không tự đổi miền, đối miền hoặc điều kiện.
- Định nghĩa hàm đơn điệu viết điều kiện bảo toàn `a ≤ b ⇒ F(a) ≤ F(b)`,
  nhưng đoạn đồ thị nói chỉ đi lên hoặc chỉ đi xuống. Giữ cả hai cách
  diễn đạt; không thay điều kiện bằng điều kiện nghịch biến.
- Phần hàm tuyến tính nói hàm dạng `f(x) = xa` là hàm tử trên monoid số
  tự nhiên nhưng không giới hạn hằng số `a`; đồng thời nói mọi đường
  thẳng cho hàm tử của thứ tự số tự nhiên. Giữ nguyên phạm vi khẳng định.
- Phần hàm affine viết `f(x) + b + f(y) + b = f(x + y) + b`, không tương
  thích với `f(x) = x * a + b` như đã nêu. Giữ nguyên biểu thức.
- Phần kiểu đồng nhất ánh xạ cấp kiểu/constructor kiểu với “kiểu đa
  hình”; nguồn dùng các từ ấy như nhau. Giữ cách gọi, không thay bằng
  một trình bày khác về constructor kiểu.
- Đoạn “Hàm tử dùng để làm gì” viết “not all routes ... and no functions
  ...”, phủ định toàn bộ các hàm giữa kiểu dữ liệu tổng quát, dù trước đó
  đã mô tả cách tạo một số hàm như vậy bằng `map`. Bản dịch giữ sự phủ
  định này, không âm thầm đổi “no” thành “not all”.
- Định nghĩa có điểm chỉ yêu cầu tồn tại biến đổi tự nhiên từ đồng nhất,
  không chỉ rõ một biến đổi được chọn làm dữ liệu của cấu trúc. Giữ cách
  phát biểu của tác giả.
- Phần phạm trù nhỏ lấy `Set`, `Mon`, `Ord` làm ví dụ phạm trù nhỏ, không
  nêu giới hạn kích thước/vũ trụ. Giữ nguyên những ví dụ ấy.
- Đoạn “Phạm trù ở mọi tầng” nói phạm trù nhóm chứa phạm trù monoid vì
  mọi monoid đều là nhóm. Đây là chiều bao hàm đảo so với phát biểu ở
  các chương trước; không sửa thành nhóm nằm trong monoid.
- Lời giải Bài tập 3 giả sử `F: C → D` nhưng dùng `F(ID_D)` và kết luận
  `ID_C = F(ID_D)`. Công thức và toàn bộ các bước chứng minh được giữ,
  không đổi các chỉ số C/D.
- Lời giải Bài tập 4 nói “dùng quy luật hàm tử” để thu cấu xạ tương ứng
  trong lúc đang chứng minh quy luật ấy. Bản dịch giữ cách giải thích,
  không thay bằng một chứng minh khác.
- Lời giải Bài tập 5 mô tả độ dốc phản ánh sự thay đổi của tốc độ tăng;
  lời giải Bài tập 6 gọi bước phân phối là quy luật phân phối “của phép
  cộng”. Giữ nguyên lời văn toán của tác giả.
- Lời giải Bài tập 8 hợp thành `C → D` và `D → E`, có kết quả
  `set(C) → set(E)`, nhưng gọi hàm tử kết quả là `C → D`. Giữ nguyên
  cả ký hiệu kết quả bị nhầm này.
- Mã ví dụ `Array<A>` thiếu một số khai báo để là mã TypeScript hợp lệ,
  và các phép so sánh `==` của mảng không biểu diễn bằng nhau theo nội
  dung trong JavaScript. Giữ mã nguyên văn vì đây là ký hiệu minh hoạ
  của tác giả, không tự đổi ngôn ngữ hoặc cách so sánh.
