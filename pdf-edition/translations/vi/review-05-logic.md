# Ghi chú bản dịch Chương 5

## Phạm vi và trạng thái

- Đã dịch toàn bộ nội dung xuất bản của `_chapters/05_logic.md`, từ «Logic» đến hết «Answers», theo bản nguồn được chấp nhận tại `9ea2ea38052e82176cccb25c4e75709dbb064d0d`.
- Bao gồm phần dẫn nhập về lôgic, modus ponens, mệnh đề hằng đúng, lược đồ tiên đề và hệ lôgic; diễn giải cổ điển theo hàm chân trị; diễn giải BHK; phần xen kẽ về luật bài trung; cách biểu diễn hệ lôgic bằng thứ tự và phạm trù; ví dụ về lôgic phạm trù; phần đại số Heyting tự do; cả bảy bài tập và bảy lời giải; câu trích Brouwer; đoạn tóm lược thế giới quan Plato; toàn bộ bảng và hình.
- Người dịch đã tự đọc đối chiếu toàn bộ nguồn và kiểm tra cấu trúc. Chưa tuyên bố đã được một người duyệt độc lập kiểm tra hoặc đã được kiểm tra trực quan trong PDF. Quy trình chung sẽ dựng và kiểm tra PDF.
- Chỉ tạo tệp dịch và ghi chú của chương. Không sửa nguồn tiếng Anh, hình gốc, cấu hình, mục lục hoặc bộ dựng; không tạo commit trong tác vụ này.

## Thuật ngữ và giọng văn

- Theo bảng thuật ngữ chung: phạm trù, cấu xạ, đối tượng, tập hợp, hàm, monoid, nhóm, thứ tự, kiểu, phép hợp thành, sơ đồ, tích và đối tích. Dùng **minh hoạ** và **quả bóng** theo quy ước chung.
- `logic` là **lôgic**; `proposition` là **mệnh đề**; `premise` là **tiền đề**; `primary proposition` là **mệnh đề cơ sở**; `atomic proposition` là **mệnh đề nguyên tử**; `composite proposition` là **mệnh đề phức hợp**.
- `tautology` là **mệnh đề hằng đúng**; `contradiction` là **mâu thuẫn**; `contingent statement` là **phát biểu tuỳ thuộc**. Giữ cách tác giả gọi phát biểu luôn sai là mâu thuẫn và dùng cùng từ khi giải thích phủ định trực giác.
- `axiom schema` là **lược đồ tiên đề**, `rule of inference` là **quy tắc suy luận**, `logical/formal system` là **hệ lôgic/hệ hình thức**, `truth table` là **bảng chân trị**.
- `and`, `or`, `implies`, `if and only if`, `negation` trong văn xuôi lần lượt là **và**, **hoặc**, **suy ra**, **khi và chỉ khi**, **phủ định**. Giữ **modus ponens**, **BHK**, **iff** và các tên riêng.
- `bivalence` là **tính hai giá trị**; `double negation elimination` là **loại bỏ phủ định kép**; `law of excluded middle` là **luật bài trung**; `principle of explosion` là **nguyên lý bùng nổ**.
- Theo Chương 4: `meet` là **phép gặp**, `join` là **phép nối**, `lattice` là **dàn**, `bounded lattice` là **dàn bị chặn**, `distributive lattice` là **dàn phân phối**. `least upper bound` là **cận trên nhỏ nhất**; `greatest/least` là **lớn nhất/nhỏ nhất**.
- `hom-set` là **tập hom**, `exponential object` là **đối tượng mũ**, `implication object` là **đối tượng kéo theo**, `relative pseudo-complement` là **phần bù giả tương đối**, `bicartesian closed category` là **phạm trù bicartesian đóng**, `thin category` là **phạm trù mỏng**.
- Dịch tên các giá trị `True/False` trong văn xuôi, chú thích hình và ô bảng thành **Đúng/Sai**. Giữ nguyên hai định danh mã nội dòng `True`; giữ cả các từ tiếng Anh đặt trong toán như `$or$`, `$implies$`, `$meet$`, `$join$`, `$True$`, `$False$` theo yêu cầu bảo toàn công thức.
- Giữ nguyên tên các bài hướng dẫn, trò chơi và trợ lý chứng minh. Bài tập là nội dung được dịch, không phải chỉ thị để cài phần mềm trong tác vụ này.
- Giữ sự dè dặt, lời trêu đùa, câu nháy mắt, câu đùa về tờ séc và lời khẳng định mạnh của tác giả. Dịch thành ngữ «bread and butter» thành «cơm và thức ăn», giữ câu đùa không rõ cái nào là cái nào.
- Tám tiêu đề cấp 1/2 khớp chính xác các mục `chapter-5-*` trong `toc.json`; giữ cấp và vị trí của mọi tiêu đề khác.

## Các sửa chữa định dạng được cho phép

Giữ nguyên nội dung toán học. Chỉ thực hiện ba sửa chữa định dạng đã được xác định trong nguồn:

- **Dòng 319**: bảng chứng minh tương đương của `↔` có năm cột ở tiêu đề và các dòng dữ liệu, nhưng dòng phân cách có sáu cột. Bỏ một ô `---` thừa để dòng phân cách còn năm cột; giữ toàn bộ các công thức và giá trị bảng.
- **Dòng 384**: sửa cặp dấu đô la không khớp `$$A ∧ B$` thành `$A ∧ B$`. Biểu thức `A ∧ B` không đổi.
- **Dòng 759**: tiền tệ `100$ check` được dịch thành «tờ séc 100&#36;». Mã hoá ký hiệu tiền thành thực thể HTML `&#36;` để dấu đô la không bị hiểu là dấu mở công thức khi từ `check` đã được dịch. Số tiền, câu đùa và điều kiện không lĩnh tiền giữ nguyên.

Ngoài ba điểm này, công thức và mã giữ nguyên nội dung và thứ tự. Bản dịch không tự bổ sung giả thiết hoặc sửa kết luận toán học.

## Những điểm của nguồn được giữ để duyệt

Số dòng dưới đây trỏ tới `_chapters/05_logic.md`; bản dịch giữ cùng vị trí dòng.

- **Dòng 24**: giữ khẳng định rằng lý thuyết toán học là lôgic cộng thêm định nghĩa và lý thuyết tập hợp chỉ cần thêm một khái niệm nguyên thuỷ; không thêm các tiên đề hoặc điều kiện khác.
- **Dòng 50–84**: nguồn gọi modus ponens là một «proposition», kể cả khi mô tả quy tắc suy luận. Dịch là **mệnh đề** ở đúng những chỗ ấy; không đồng nhất hoá toàn bộ cách gọi.
- **Dòng 102–116**: giữ các phát biểu về mô hình, thay tên/tính chất trong ví dụ Socrates, và việc lôgic không quan tâm đến phát biểu tuỳ thuộc; không thu hẹp phạm vi khẳng định của nguồn.
- **Dòng 153**: nguồn viết «in the previous chapter» khi nói về dùng modus ponens làm lược đồ tiên đề. Giữ **trong chương trước**, không tự đổi thành «phần trước».
- **Dòng 161–171**: nguồn định nghĩa hệ lôgic bằng khả năng tạo ra «all possible propositions», rồi gắn với định lý đầy đủ Gödel. Giữ **mọi mệnh đề có thể/mọi mệnh đề khác**, không sửa thành một mệnh đề chính xác hơn về tất cả các hệ quả hợp lệ.
- **Dòng 181–185 và 355–359**: giữ nguyên các nhận định lịch sử/triết học của tác giả về Plato, Hilbert, Kant, Schopenhauer và nền tảng tập hợp/phạm trù của các hệ lôgic. Không cập nhật hoặc thay lời giải thích theo tài liệu khác.
- **Dòng 279**: nguồn gọi phép suy ra là «material condition» và nói mệnh đề thứ nhất là «necessary condition» cho mệnh đề thứ hai. Giữ **điều kiện vật chất** và **điều kiện cần**; không thay «cần» bằng «đủ».
- **Dòng 312**: giữ nguyên thuộc tính Markdown `{: theorem}` thiếu dấu chấm; không coi đây là một trong ba sửa chữa được cho phép.
- **Dòng 369–377**: giữ cách tác giả nói về tính hai giá trị giữa việc có/không có chứng minh và định nghĩa mệnh đề là thứ có chứng minh; không viết lại theo một định nghĩa BHK khác.
- **Dòng 420–426**: giữ khẳng định không có phép Khi và chỉ khi trong BHK, cùng bước đi từ hai hàm chuyển đổi qua lại đến đẳng cấu và lưu ý về các hàm chính tắc. Không thêm điều kiện hai hàm nghịch đảo.
- **Dòng 432**: nguồn định nghĩa `⊥` như chứng minh của một công thức không có chứng minh. Giữ cách phát biểu này thay vì tự chỉnh lại vai trò của đối tượng rỗng.
- **Dòng 456 và 794–801**: Bài tập 3 nói không có hàm từ bất kỳ tập hợp nào đến tập hợp rỗng, còn lời giải sau đó nêu ngoại lệ tập hợp nguồn rỗng. Giữ cả bài tập và ngoại lệ, không sửa đề bài.
- **Dòng 458**: giữ dấu ngoặc chưa đóng trong đề Bài tập 4 theo nguồn.
- **Dòng 474**: nguồn viết «either true and false». Giữ **đúng và sai**, không tự thay `and` bằng `or` hoặc suy đoán phát biểu dự định.
- **Dòng 501**: giữ nguyên `Coq/Roql`, không tự sửa tên thứ hai hoặc cập nhật khuyến nghị.
- **Dòng 515**: nguồn nói quan hệ «bigger than», nhưng công thức là `$A ≤ B$`. Giữ **lớn hơn** cùng công thức ấy.
- **Dòng 549**: giữ lời giải thích dàn phân phối đẳng cấu với thứ tự bao hàm chứa mọi tổ hợp của phần tử và việc tạm bỏ qua phép và. Không sửa phạm vi biểu diễn hoặc điều kiện của kết quả.
- **Dòng 559 và 567**: giữ cách nguồn nói không có phát biểu đúng suy ra Sai và «không có gì suy ra» từ Đúng; không thêm ngoại lệ hoặc điều kiện.
- **Dòng 597 và 587**: nguồn luân phiên dùng `$A → B$` và `$A \Rightarrow B$` khi nói về đối tượng kéo theo. Giữ từng biểu thức đúng như nguồn.
- **Dòng 606**: nguồn dùng «upper limit»; dịch là **giới hạn trên**, không tự đổi thành một phát biểu về cận trên nhỏ nhất.
- **Dòng 616**: nguồn nói phép gặp «smaller than» `$B$`, trong khi công thức mũi tên không biểu thị bất đẳng thức nghiêm. Giữ **nhỏ hơn** và giữ công thức.
- **Dòng 630**: giữ chữ ký `$g: I \to A \to B$` của cấu xạ phổ dụng và lời mô tả về hợp thành; không tự đổi sang mũi tên đến đối tượng mũ hay bổ sung phép đánh giá.
- **Dòng 648–668**: giữ các định nghĩa ngắn gọn về đại số Heyting và phạm trù bicartesian đóng mà không thêm lượng từ hoặc điều kiện hữu hạn. Ở dòng 654, nguồn xếp «and/or» cùng «joins/meets»; ở dòng 668, «True/False» cùng «initial/terminal». Giữ thứ tự của các cặp từ ấy, dù chúng không khớp thứ tự tương ứng đã trình bày trước đó.
- **Dòng 721**: giữ nguyên biểu thức `$(A ∧ A \Rightarrow A) → A$` trong lập luận với mọi `$X$`; không thay bằng một công thức khác.
- **Dòng 733**: chú thích thay thế của hình viết «A follows from B» dù đoạn trước bàn về A suy ra B. Giữ hướng của chú thích nguồn.
- **Dòng 739**: giữ cách gọi «deduction theorem» và phát biểu về hệ quả ngữ nghĩa; không bổ sung điều kiện của một định lý suy diễn khác.
- **Dòng 765**: giữ khẳng định «you cannot prove a negative» và cách tác giả giới hạn nó bằng «not generally able»; không thay bằng một mô tả khác về lôgic trực giác.
- **Dòng 790**: lời giải Bài tập 2 liệt kê «disjoint union/coproduct/meet». Giữ **hợp rời/đối tích/phép gặp**, không tự sửa từ cuối thành «phép nối».
- **Dòng 826**: nguồn đưa công thức `$(A → B) → ((B → C) → (A → C))$` như kiểm tra tính kết hợp. Giữ nguyên công thức và tên tính chất.
- Diễn đạt trôi chảy các lỗi lặp từ/ngữ pháp thuần tuý như «describing them them», «a of objects», «such a way that such that», «compostite»; không bỏ nội dung. Giữ các dấu câu dang dở đi cùng công thức khi chúng không nằm trong ba sửa chữa định dạng nêu trên.
- Giữ nguyên các bình luận HTML không xuất bản bằng tiếng Anh, gồm các bản nháp về dàn Rieger–Nishimura và «Proving a negative», các lỗi viết `Heytung` trong bình luận, hình và hai URL nằm trong bình luận. Không đưa những bản nháp đó vào nội dung xuất bản.

## Bằng chứng kiểm tra

- Cả nguồn và bản dịch có **873 dòng**. Vị trí dòng trống, văn xuôi, hình, thuộc tính Markdown, thẻ Liquid và cấp đề mục khớp ở từng dòng. Điều này kiểm tra bỏ sót/thay thứ tự về cấu trúc, không thay thế việc duyệt nghĩa độc lập.
- Sau khi chuẩn hoá đúng hai thay đổi dấu đô la được cho phép ở dòng 384 và 759, **287 đoạn toán** giữ nguyên nội dung và thứ tự. Không có công thức mới hoặc công thức bị bỏ.
- **2 đoạn mã nội dòng**, **65 đường dẫn hình**, **4 thẻ Liquid**, **33 khối thuộc tính Markdown** và **6 bình luận HTML** có số lượng, thứ tự và nội dung giống nguồn. Bình luận được so sánh sau khi chuẩn hoá CRLF thành LF.
- **37 dòng đề mục** giữ cấp và vị trí, gồm **36 đề mục xuất bản** và một tiêu đề cấp 3 trong bình luận không xuất bản. Cả **8 tiêu đề cấp 1/2** khớp `toc.json`.
- **14 nhãn bài tập/lời giải** giữ nguyên số và thứ tự. Các dấu nhấn mạnh, in đậm, gạch xoá, tiền tố blockquote/danh sách và các dòng phân cách đều được đối chiếu.
- Mọi cột, ký hiệu và giá trị chân trị của bảng được giữ theo nghĩa tương ứng; chỉ dòng phân cách sáu cột sai ở dòng 319 được sửa thành năm cột.
- Bản dịch và ghi chú lưu bằng **UTF-8 không BOM, kết thúc dòng LF**.
