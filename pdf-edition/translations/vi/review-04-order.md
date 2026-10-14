# Ghi chú đối chiếu Chương 4 — Thứ tự

Bản dịch đầy đủ của `_chapters/04_order.md` tại phiên bản nguồn
`9ea2ea38052e82176cccb25c4e75709dbb064d0d`. Phạm vi gồm toàn bộ văn bản
được xuất bản, định nghĩa, định lý, ví dụ, hai phần xen kẽ, trích dẫn,
6 bài tập và 6 lời giải, các bảng và chú thích thay thế của hình.

Đã tự đối chiếu văn bản và cấu trúc. Chưa tuyên bố có người khác duyệt
độc lập hoặc đã kiểm tra bản PDF dựng từ chương này.

## Kết quả kiểm tra cấu trúc

| Nội dung | Nguồn | Bản dịch | Kết quả |
| --- | ---: | ---: | --- |
| Dòng | 736 | 736 | Đủ |
| Khối ngăn bởi dòng trống | 327 | 327 | Đủ, giữ thứ tự |
| Đề mục Markdown | 32 | 32 | Giữ nguyên chuỗi cấp đề mục |
| Đề mục cấp 1–2 | 9 | 9 | Khớp chính xác `toc.json` |
| Lần xuất hiện hình | 59 | 59 | URL và thứ tự giống hệt |
| Biểu thức toán trong dấu `$`/`$$` | 118 | 118 | Nội dung và thứ tự giống hệt |
| Khối mã có hàng rào | 1 | 1 | Nội dung giống hệt, kể cả khoảng trắng |
| Đoạn mã nội dòng ngoài hàng rào | 0 | 0 | Không có |
| Thẻ Liquid | 6 | 6 | Giống hệt |
| Dòng thuộc tính Markdown | 17 | 17 | Giống hệt |
| Chú thích HTML | 9 | 9 | Giống hệt |
| Nhãn bài tập | 12 | 12 | Hai lượt 1–6, giữ nguyên thứ tự |

Nguồn có 7.095 đơn vị ngăn bằng khoảng trắng; bản dịch có 9.005 đơn vị,
gồm siêu dữ liệu, chú thích, mã và ký hiệu. Phép đếm này không đánh giá
tương đương ngữ nghĩa giữa hai ngôn ngữ. Các tệp bản dịch và ghi chú dùng
UTF-8 không BOM và LF.

Không thay đổi nguồn tiếng Anh, tài nguyên hình, hình học của hình, cấu hình
hay mục lục dùng chung. Chú thích HTML không in được giữ nguyên bằng tiếng
Anh; văn bản hiển thị và các chú thích thay thế của hình đều được dịch.

## Lựa chọn dịch thuật

- Giữ thuật ngữ: thứ tự tuyến tính, thứ tự bộ phận, tiền thứ tự, dàn,
  nửa dàn, phép gặp, phép nối, bảo toàn thứ tự, phép chiếu, phạm trù,
  cấu xạ, tích, đối tích, tập hợp và hàm.
- Dùng “tính phản xạ”, “tính bắc cầu”, “tính phản đối xứng”, “tính toàn
  phần”, “quan hệ hai ngôi”, “thứ tự bao hàm”, “dàn phân phối”, “dàn bị
  chặn”, “phần tử bất khả quy đối với phép nối”, “phạm trù mỏng” và
  “phạm trù bộ khung”.
- Giữ phân biệt của nguồn: tiêu đề “formal concept analysis” là “phân
  tích khái niệm hình thức”, còn lời dẫn gọi phương pháp là “formal
  context analysis”, được dịch là “phân tích bối cảnh hình thức”.
- “Ball” là “quả bóng”. Viết “minh hoạ” theo lựa chọn của người dùng.
- Giữ các nhãn sơ đồ `m`, `g`, `f`, `o` trong đoạn về bảng xếp hạng bóng
  đá, đặt cạnh các từ đã dịch. Các tên `Fish`, `Frog`, `Dog`, `WaterWeed`,
  `Corn` và các định danh thuộc tính PascalCase trong lời giải Bài tập 5
  được giữ như nguồn để bảo toàn hệ thống định danh của ví dụ.
- Giữ giọng kể, lời dè dặt và các khẳng định của tác giả. Không thêm
  giải thích vào nội dung chương và không sửa toán.

Không có sửa lỗi cú pháp hiển thị riêng trong chương này. Các lỗi ngữ pháp
tiếng Anh được chuyển sang câu tiếng Việt tự nhiên mà giữ nguyên ý.

## Những điểm bất nhất của nguồn được giữ lại

- Nguồn nhiều lần gọi ký hiệu `≤` là “bigger or equal to” (“lớn hơn hoặc
  bằng”), nhưng dùng nó theo chiều khác ở một số ví dụ. Giữ nguyên cả
  lời văn và ký hiệu, không tự đổi thành `≥` hay “nhỏ hơn hoặc bằng”.
- Định nghĩa phép nối ở hai chỗ có lời văn yêu cầu `P` lớn hơn `A`, `B`
  nhưng công thức viết `P ≤ A` và `P ≤ B`. Giữ nguyên các biểu thức.
- Định nghĩa thứ tự bao hàm nói `A` đứng trước `B` nếu `A` chứa `B`,
  trong khi phát biểu phép nối là hợp, phép gặp là giao tương ứng với
  hướng bao hàm ngược lại. Không đảo định nghĩa hay phép toán.
- Đoạn về số tự nhiên nói mọi thứ tự hữu hạn đẳng cấu với một tập hợp
  con của thứ tự số, rồi nói đẳng cấu với các số tự nhiên; nó cũng nói
  hầu hết thứ tự tuyến tính vô hạn đẳng cấu với số tự nhiên. Giữ nguyên
  mức độ và phạm vi các khẳng định ấy.
- Đoạn phần tử lớn nhất nói có thể có nhiều phần tử lớn hơn mọi phần tử
  khác nhưng không phần tử nào lớn nhất. Cách nói này không phân biệt
  phần tử cực đại với phần tử lớn nhất; bản dịch giữ cách gọi của nguồn.
- Lời mô tả sơ đồ Hasse nói có thể so sánh hai điểm bất kỳ bằng việc
  điểm nào ở trên, nhưng vị trí dọc tự nó không cho quan hệ so sánh nếu
  không có đường nối. Không thêm điều kiện vào nội dung chương.
- Ví dụ phân tích số nguyên tố nói về “tập hợp” có phần tử lặp lại; một
  tập hợp thông thường không lưu số lần lặp. Giữ nguyên mô tả, kể cả
  phương án “luỹ thừa nguyên tố” của tác giả.
- Đoạn dẫn định lý Birkhoff giới hạn ở thứ tự hữu hạn, nhưng phát biểu
  đóng khung không nêu hữu hạn, và nói thứ tự bao hàm “của các phần tử
  bất khả quy” mà không nói rõ tập hợp con đóng xuống. Giữ nguyên sự
  rút gọn của nguồn.
- Phần nửa dàn nói “chỉ có phép nối và không có phép gặp” (hoặc ngược
  lại); cách định nghĩa này không bao gồm dàn, mặc dù một dàn cũng là
  nửa dàn theo định nghĩa thông thường. Đoạn cây cũng không nói rõ các
  kết nối trực tiếp khác với các quan hệ bắc cầu. Giữ cách diễn đạt.
- Ví dụ “anh/chị lớn hơn” được nói là tạo thành dàn chỉ vì một người có
  thể có nhiều anh chị; phần phân tích khái niệm cũng nói chỉ cần thêm
  phần tử trên cùng/dưới cùng là có dàn. Những kết luận này thiếu điều
  kiện bổ sung. Không tự thêm điều kiện hay dựng lại ví dụ.
- Phần tiền thứ tự viết phản đối xứng thành `a ≤ b ⟺ b ≰ a`; lời giải
  Bài tập 1 cũng nói `a ≤ b` cấm `b ≤ a` mà không chừa trường hợp bằng
  nhau. Giữ nguyên ký hiệu và lời văn tương ứng.
- Phần “Thứ tự bộ phận và thứ tự toàn phần như phạm trù” gọi riêng
  “preorders” là phạm trù bộ khung. Phát biểu này không đúng cho tiền
  thứ tự tổng quát có các đối tượng phân biệt đẳng cấu; không đổi chữ
  “tiền thứ tự” thành “thứ tự bộ phận”.
- Nguồn gọi các cấu xạ đi vào đối tích là “projection” và một lần dùng
  “product” trong định nghĩa đối tích. Bản dịch giữ “phép chiếu” và
  “tích” ở những chỗ ấy.
- Phát biểu đối tích “trong phạm trù các tiền thứ tự” là phép nối dùng
  tên phạm trù dễ hiểu nhầm với phạm trù có các tiền thứ tự làm đối tượng;
  phép nối đang được mô tả trong phạm trù mỏng của một tiền thứ tự.
  Giữ nguyên tên và phạm vi lời văn nguồn.
- Lời giải Bài tập 4 nói dàn phải có phép nối cho mọi tập hợp phần tử,
  và không thể lấy tập hợp mọi số nguyên. Dàn nói chung chỉ đòi hỏi phép
  nối/gặp hữu hạn không rỗng, và tập hợp số nguyên vẫn tồn tại. Giữ các
  phát biểu của tác giả, không thay bằng một chứng minh mới.
- Ví dụ tính chia hết của “các số nguyên” không nói giới hạn ở số dương;
  xét mọi số nguyên, hai số đối nhau có thể chia hết nhau nhưng khác nhau.
  Không tự sửa miền của ví dụ.
- Đoạn mã JavaScript dùng giá trị Boolean cho hàm so sánh `sort`, trong
  khi hàm so sánh thông thường trả về số âm, không hoặc dương. Mã được
  giữ nguyên từng ký tự theo yêu cầu bảo toàn nguồn.
