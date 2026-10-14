# Ghi chú đối chiếu Chương 1 — Tập hợp

Bản dịch đầy đủ của `_chapters/01_set.md` tại phiên bản nguồn
`9ea2ea38052e82176cccb25c4e75709dbb064d0d`. Phạm vi gồm toàn bộ văn bản được
xuất bản của chương, câu đề từ, định nghĩa, định lý, các phần xen kẽ, phần bổ
sung, 11 bài tập và 11 lời giải, cùng mọi chú thích thay thế của hình.

Bản dịch đã được người dịch tự đối chiếu cấu trúc và nội dung; ghi chú này
không tuyên bố đã có một người khác duyệt độc lập hoặc đã kiểm tra bản PDF.

## Kết quả kiểm tra cấu trúc

Đối chiếu bằng cách trích xuất tuần tự trực tiếp từ hai tệp Markdown:

| Nội dung | Nguồn | Bản dịch | Kết quả |
| --- | ---: | ---: | --- |
| Dòng | 726 | 726 | Đủ |
| Khối ngăn bởi dòng trống | 344 | 344 | Đủ, giữ thứ tự |
| Đề mục Markdown | 41 | 41 | Giữ nguyên chuỗi cấp đề mục |
| Đề mục cấp 1–2 | 12 | 12 | Khớp chính xác tiêu đề trong `toc.json` |
| Lần xuất hiện hình | 48 | 48 | URL và thứ tự giống hệt |
| Biểu thức toán trong dấu `$`/`$$` | 149 | 149 | Nội dung và thứ tự giống hệt |
| Đoạn mã nội dòng | 16 | 16 | Nội dung và thứ tự giống hệt |
| Khối mã có hàng rào | 0 | 0 | Không có trong nguồn |
| Thẻ Liquid | 6 | 6 | Giống hệt |
| Dòng thuộc tính Markdown | 20 | 20 | Giống hệt |
| Chú thích HTML | 8 | 8 | Giống hệt |
| Nhãn bài tập | 22 | 22 | Hai lượt 1–11, giữ nguyên thứ tự |

Đếm theo khoảng trắng: nguồn có 8.032 đơn vị; bản dịch có 9.810 đơn vị
(gồm siêu dữ liệu, chú thích và ký hiệu). Đây là phép đếm tệp, không phải
thước đo tương đương ngữ nghĩa giữa hai ngôn ngữ. Tệp bản dịch dùng UTF-8
không BOM và xuống dòng LF.

Chỉ dịch chữ; không thay đổi nguồn tiếng Anh, tài nguyên hình, hình học của
hình, cấu hình dựng hay mục lục dùng chung. Các chú thích HTML không in được
giữ bằng tiếng Anh; mọi văn bản hiển thị, kể cả chú thích thay thế của hình,
đều được dịch. Ký hiệu toán, định danh lập trình và tên riêng được giữ.

## Lựa chọn dịch thuật

- Dùng thuật ngữ đã thống nhất: tập hợp, hàm, phạm trù, cấu xạ, phép hợp
  thành, hàm đồng nhất, đẳng cấu, sơ đồ; dùng “Bài tập” cho “Task”.
- Dùng “tập nguồn”, “tập đích”, “miền xác định”, “đối miền”, “tập hợp đơn”,
  “tập hom”, “quan hệ tương đương”, “tính phản xạ”, “tính bắc cầu” và
  “tính đối xứng”.
- “Ball” là “quả bóng”; các chú thích hình dùng cùng lựa chọn này.
- Giữ giọng kể của tác giả, những lời dè dặt, các câu hỏi tu từ và phần hài
  hước. Câu mở đầu chơi chữ với từ “set” của tiếng Anh; bản dịch dùng
  “tập hợp” ở vị trí ấy, nhưng không thể giữ trọn nghĩa kép của từ này.
- Viết “minh hoạ” theo lựa chọn của người dùng.

## Sửa lỗi trình bày được cho phép

Hai sửa đổi chỉ liên quan đến cách hiển thị, không sửa nội dung toán:

- Trong đoạn về tập hợp đơn, sửa thực thể hỏng `&mdash,` thành `&mdash;`.
- Trong lời giải Bài tập 6, sửa nhãn nguồn `**Task 6: **Again, ...` thành
  nhãn đậm đúng cú pháp `**Bài tập 6:** Một lần nữa, ...`.

## Những điểm bất nhất của nguồn được giữ lại

- Định nghĩa đẳng cấu “bên ngoài” viết `f: A → B`, `g: B → A` nhưng đặt
  `f ∘ g = ID_A` và `g ∘ f = ID_B`. Theo thứ tự hợp thành đã định nghĩa
  trước đó, hai chỉ số đồng nhất bị đảo. Giữ nguyên TeX của nguồn.
- Công thức minh hoạ thứ tự hợp thành viết `$f(g(a)$`, thiếu dấu ngoặc
  đóng. Giữ nguyên biểu thức toán.
- Phần số gọi tập `ℕ` là tập số nguyên dương nhưng đồng thời liệt kê `0`.
  Giữ nguyên cả hai cách trình bày.
- Phần hàm bình phương nói mọi số đích đều có hai mũi tên cho hai căn,
  mặc dù `0` chỉ có một căn phân biệt; sau đó nói một số số không phải
  bình phương của số nào, dù tập đích được mô tả là các số thực không âm.
  Không tự sửa các phát biểu này.
- Phần “Hàm và tập hợp con” gọi hàm đưa phần tử tập con tới chính nó là
  “image” (dịch là “ảnh”), thay vì thuật ngữ thường dùng cho phép bao hàm.
  Giữ cách gọi của nguồn.
- Phần đẳng cấu dùng “hai hàm là đẳng cấu” để nói về một cặp hàm ngược
  nhau; phần quan hệ tương đương cũng viết “các đẳng cấu là quan hệ tương
  đương”. Giữ mức độ phát biểu và cách dùng của tác giả.
- Ví dụ hàm “chị/em gái” và “anh/em trai” có thể cho nhiều kết quả hoặc
  không có kết quả; quan hệ mẹ/con cũng không là đẳng cấu trong trường
  hợp tổng quát. Giữ nguyên các ví dụ và khẳng định của nguồn.
- Ví dụ vua/nữ hoàng giả định mỗi vương quốc có đúng một vị; ví dụ vợ/chồng
  giả định một bạn đời duy nhất. Giữ nguyên các giả định không nói rõ này.
- Đoạn lập trình hàm thuần tuý khẳng định khá rộng về chữ ký kiểu, I/O và
  phong cách truyền tiếp diễn. Bản dịch giữ nguyên mức độ khẳng định,
  không bổ sung hay thay thế bằng giải thích kỹ thuật khác.
- Nguồn có vài dấu ngoặc prose chưa đóng (đoạn hiệu ứng phụ, đoạn hợp thành
  các quan hệ thân thuộc, chú thích hình “mother”, lời giải Bài tập 6).
  Giữ lại cấu trúc tương ứng, ngoài hai sửa lỗi trình bày đã nêu trên.
- Cách mô tả quần thể/vốn gen, sự suy luận từ thần học Ba Ngôi, và cách
  định nghĩa số bằng toàn bộ các tập hợp đẳng cấu là lời của tác giả.
  Không tự thay đổi hay thêm chú giải vào nội dung chương.
