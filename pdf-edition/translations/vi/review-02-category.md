# Ghi chú bản dịch Chương 2

## Phạm vi và trạng thái

- Đã dịch toàn bộ nội dung xuất bản của `_chapters/02_category.md`, từ «From Sets to Categories» đến hết «Answers», theo bản nguồn được chấp nhận tại `9ea2ea38052e82176cccb25c4e75709dbb064d0d`.
- Bao gồm phần xen kẽ về hệ toạ độ, đối ngẫu phạm trù và De Morgan; phần định nghĩa tập hợp bằng hàm; phần trở lại với phạm trù; toàn bộ phần bổ sung về đồng nhất, kết hợp, giao hoán và quy giản; cả sáu bài tập cùng sáu lời giải; câu trích Dijkstra; bảng so sánh; tất cả hình và chú thích thay thế.
- Đây là bản dịch hoàn chỉnh của chương đã được người dịch tự đối chiếu nguồn. Chưa tuyên bố đã được một người duyệt độc lập kiểm tra hoặc đã được kiểm tra trực quan trong PDF. Quy trình chung sẽ dựng và kiểm tra PDF.
- Giữ nguyên nguồn tiếng Anh, tài sản hình, cấu hình chung và mục lục. Không tạo commit trong tác vụ dịch chương này.

## Lựa chọn dịch thuật

- Dùng bảng thuật ngữ chung: phạm trù, cấu xạ, đối tượng, tập hợp, hàm, hàm tử, biến đổi tự nhiên, monoid, nhóm, thứ tự, kiểu, phép hợp thành, sơ đồ, tích và đối tích.
- `sum` là **tổng**, còn `coproduct` là **đối tích**; không gộp hai tên gọi trước đoạn tác giả giải thích mối liên hệ giữa chúng.
- `Cartesian product` là **tích Descartes**; `ordered pair` là **cặp có thứ tự**; `tuple` là **bộ**; `triple product` là **tích ba**.
- `projection` là **phép chiếu**, `universal property` là **tính chất phổ dụng**, `universal morphism` là **cấu xạ phổ dụng**; `impostor` được dịch là **giả mạo** để giữ giọng văn thân mật của tác giả.
- `singleton set` là **tập hợp đơn phần tử**; `initial object` và `terminal object` lần lượt là **đối tượng đầu** và **đối tượng cuối**.
- `identity` là **đồng nhất**, `associativity` là **tính kết hợp**, `commutativity` là **tính giao hoán**, `commutative diagram` là **sơ đồ giao hoán**; `type signature` là **chữ ký kiểu**.
- `collection` trong định nghĩa phạm trù được dịch là **họ** để phân biệt từ này với `set` (**tập hợp**), đúng với cách tác giả thử giới thiệu phạm trù không dựa vào tập hợp.
- `reductionism` là **thuyết quy giản**, `curried` là **được curry hoá**; giữ **phạm trù monoidal** theo cách dùng trong dự án `category-theory-sciences-vi`, phân biệt với phạm trù các monoid.
- Dùng **quả bóng**, **minh hoạ** theo quy ước chung. Giữ tên riêng, tên ngôn ngữ, các định danh lập trình và tên bài viết được trích. Giữ câu đùa, lời nhắc thân mật, sự dè dặt và mức độ khẳng định của tác giả.
- Tiêu đề cấp 1 và 2 khớp chính xác tám mục `chapter-2-*` trong `toc.json`. Các tiêu đề cấp thấp hơn được dịch tự nhiên, giữ cấp và vị trí.

## Các điểm của nguyên bản được giữ để đối chiếu

Các số dòng dưới đây chỉ tới nguồn `_chapters/02_category.md`; bản dịch giữ cùng vị trí dòng. Các điểm này được ghi lại để duyệt, không tự ý sửa công thức hoặc lập luận của tác giả.

- Dòng 16 mô tả tập hợp `$B$` là chứa các `$B$`, trong khi tập hợp `$A$` chứa các `$a$`. Giữ nguyên ký hiệu.
- Dòng 153, ngay sau định nghĩa tích đầu tiên, viết `$C \to A$` nhưng hàm thứ hai lại là `$A \times B \to B$`. Giữ cả hai biểu thức.
- Dòng 156 nói `$A \times B \times X$` với «any element `$X$`», dù ngữ cảnh dùng `$X$` như tập hợp. Dịch đúng danh từ «phần tử» ở chỗ này, không thay thành «tập hợp».
- Dòng 187–188: định nghĩa tích bằng tính chất phổ dụng giữ nguyên cách xuống dòng và vị trí công thức ở ngoài dòng blockquote.
- Dòng 207 dùng `$C$` ở giả thiết, nhưng ở vế sau lại ghi «isomorphic to `$C'$`». Giữ nguyên sự chuyển ký hiệu đó.
- Dòng 211 thiếu dấu ngoặc kép đóng trong câu nói về «unique up to an isomorphism»; dòng 215 thiếu dấu ngoặc đóng trong «and vice versa». Bản dịch thêm dấu câu để câu tiếng Việt đọc được; không đổi ý hoặc mức độ khẳng định.
- Dòng 236 định nghĩa tổng bằng tất cả các phần tử của hai tập hợp, rồi dòng 240 giải thích việc một phần tử chung xuất hiện hai lần. Giữ cách trình bày của nguồn, không thay bằng một định nghĩa tổng rời khác.
- Dòng 267–268 và 625–626 gọi các mũi tên đi vào tổng hoặc các mũi tên chiếu là «projection». Giữ cách gọi **chiếu** của tác giả, không tự đổi tên cấu xạ vào tổng thành thuật ngữ khác.
- Dòng 277 nêu tổng giả mạo `$A + B + X$`, nhưng công thức mũi tên ngay sau dùng `$R$`. Giữ cả `$X$` và `$R$`.
- Dòng 328, trong diễn giải định luật De Morgan thứ hai, nguồn viết «opposite of blond and brown», trong khi các đoạn trước nói «blond or brown» và công thức vẫn là phủ định phép tuyển. Giữ «vàng và nâu» trong văn xuôi và giữ công thức nguyên văn.
- Dòng 376 gọi mỗi phần tử là «isomorphic to» một hàm; giữ **đẳng cấu**, không thay bằng một phát biểu chính xác hơn về sự tương ứng.
- Dòng 398 nói hai tập hợp có các hàm duy nhất giữa chúng thì đẳng cấu, đồng thời dùng các lượng từ/ký hiệu theo đúng nguồn. Giữ nguyên lời giải thích và mọi công thức.
- Dòng 438 định nghĩa tập hợp rỗng chỉ bằng sự tồn tại của hàm đến mọi tập hợp, sau khi định lý trước đó có tính duy nhất. Giữ nguyên việc định nghĩa không nói «duy nhất».
- Dòng 476 gọi ETCS tương đương với lý thuyết tập hợp ZFC mà không nêu thêm điều kiện; giữ nguyên độ mạnh của khẳng định, không bổ sung giả thiết từ bên ngoài.
- Dòng 510 giữ chi tiết Tom Lehrer qua đời năm 2025 và dấu ngoặc đóng thừa vốn có trong nguồn; không thay đổi theo một phiên bản khác của sách.
- Dòng 522–524 mô tả một tập hợp là phạm trù «không có cấu xạ», dù về sau yêu cầu mỗi đối tượng có cấu xạ đồng nhất. Giữ mô tả của nguồn và ghi nhận sự bất nhất này.
- Dòng 550 có ký pháp dang dở `$f \;\text{after}\; $g.`; giữ byte của đoạn toán và ký hiệu `g` bên ngoài dấu đô la như nguồn. Chỉ dịch lời hướng dẫn đọc thành «sau».
- Dòng 560 có mảnh câu «Wait, we had The way identity...». Dịch thành «Khoan, chúng ta đã có... Cấu xạ đồng nhất...» để giữ cả mảnh lời ngắt và nội dung tiếp theo; không suy đoán phần còn thiếu.
- Dòng 582 giữ dấu ngoặc đóng thừa sau công thức kết hợp.
- Dòng 584–612 có những phát biểu rộng về sơ đồ, tính kết hợp và việc sơ đồ chỉ biểu diễn cấu trúc có tính kết hợp. Giữ phạm vi khẳng định của tác giả.
- Dòng 690 nói hợp thành hai hàm theo cả hai chiều chỉ khả thi khi cả hai đều có cùng một tập hợp làm nguồn và đích. Giữ phát biểu này, không tự thay bằng điều kiện phù hợp khác.
- Dòng 700 và 717 gọi tính kết hợp là phiên bản hạn chế hơn của tính giao hoán; dòng 717 gọi toán tử hợp thành tự nó là một cấu xạ. Giữ các diễn giải này thay vì bổ sung điều kiện hoặc sửa lập luận.
- Các lỗi lặp từ thuần ngữ pháp như «one which which», «result would result would not result», «to to» được diễn đạt trôi chảy trong tiếng Việt mà vẫn giữ đầy đủ nội dung.
- Giữ nguyên bình luận HTML/TODO không xuất bản bằng tiếng Anh, gồm cả phần «Testing the definition» chưa hoàn thành. Không đưa nội dung bình luận ấy vào văn bản xuất bản.

## Bằng chứng kiểm tra

Đối chiếu tự động nguồn và bản dịch, bên cạnh việc đọc dịch từng đoạn:

- Cả hai có **796 dòng**; vị trí dòng trống, dòng văn xuôi, dòng hình, cấp đề mục, thẻ Liquid và thuộc tính Markdown khớp ở từng dòng. Đây là bằng chứng cấu trúc để phát hiện bỏ sót hoặc đổi thứ tự, không thay thế việc duyệt nghĩa độc lập.
- **282 đoạn toán**, **5 đoạn mã nội dòng**, **71 đường dẫn hình**, **8 thẻ Liquid** và **20 khối thuộc tính Markdown** có số lượng, thứ tự và nội dung giống hệt nguồn.
- **10 bình luận HTML** giữ nguyên nội dung sau khi chuẩn hoá kết thúc dòng CRLF của nguồn thành LF.
- **36 đề mục** giữ cấp và thứ tự; cả **8 tiêu đề cấp 1/2** khớp `toc.json`.
- Giữ các dấu nhấn mạnh, in đậm và gạch xoá; giữ bố cục bảng và các dấu phân cách lời giải.
- Tệp bản dịch dùng **UTF-8 không BOM, kết thúc dòng LF**.
