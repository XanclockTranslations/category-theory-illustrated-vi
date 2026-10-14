---
layout: default
title: Lôgic
---

# Lôgic

Bây giờ, hãy nói về một chủ đề nữa *có vẻ* không liên quan, để chúng ta có thể tự "ngạc nhiên" khi nhận ra đó là lý thuyết phạm trù. Nhân tiện, chương này còn có một điều bất ngờ khác nữa, nên đừng ngủ gật nhé. 

Hơn nữa, tôi sẽ không chỉ đưa bạn đến một nhánh toán học khác, mà đến một ngành hoàn toàn khác --- *lôgic*. 

## Lôgic là gì

Lôgic là khoa học về những gì *có thể*. Vì vậy, nó nằm ở gốc của mọi khoa học khác, vốn đều là khoa học về những gì *thực có*, tức những gì thực sự tồn tại. Chẳng hạn, nếu khoa học giải thích cách vũ trụ của chúng ta hoạt động, thì lôgic là phần mô tả cũng áp dụng được cho bất kỳ vũ trụ nào khác *có thể tồn tại*. Một lý thuyết khoa học hướng đến sự nhất quán cả với chính nó lẫn với những quan sát, còn một lý thuyết lôgic chỉ cần nhất quán với chính nó (và đúng bất kể những quan sát).  

Vậy chúng ta có thể nói:

{: .definition}

> Lôgic nghiên cứu các *quy tắc* theo đó, biết một điều cho phép bạn kết luận (hay *chứng minh*) rằng một điều khác cũng đúng, bất kể lĩnh vực của những điều ấy (chẳng hạn ngành khoa học), và chỉ xét hình thức của chứng minh (tức là xét một cách "hình thức"). 
>
> Ngoài ra, lôgic cố gắng tổ chức các quy tắc và lập luận ấy thành những *hệ lôgic* (còn được gọi là *hệ hình thức*).

Nhìn mô tả này, chúng ta có thể nghĩ rằng đối tượng nghiên cứu của lôgic khá giống đối tượng nghiên cứu của lý thuyết tập hợp và lý thuyết phạm trù --- thay cho từ "hình thức", chúng ta đã dùng một từ tương tự là "trừu tượng", và thay cho "hệ lôgic", chúng ta nói "lý thuyết". Nhận xét này khá đúng --- ngày nay, phần lớn mọi người đều đồng ý rằng mỗi lý thuyết toán học thực ra là lôgic cùng một số định nghĩa bổ sung. Chẳng hạn, một phần lý do *lý thuyết tập hợp* phổ biến đến vậy như một lý thuyết làm nền tảng cho toán học là nó có thể được định nghĩa bằng cách thêm đúng một khái niệm nguyên thuỷ vào các tiên đề lôgic chuẩn mà chúng ta sẽ gặp ngay sau đây --- quan hệ hai ngôi biểu thị *sự thuộc về tập hợp*. Lý thuyết phạm trù cũng gần với lôgic, nhưng theo một cách khá khác mà chúng ta sẽ hiểu sau. Vậy hãy bắt đầu.

### Các mệnh đề cơ sở

Một hệ quả của việc lôgic là khoa học về những gì có thể là, để làm bất kỳ điều gì trong đó, chúng ta cần có một tập hợp ban đầu các mệnh đề được chấp nhận là đúng hoặc sai. Chúng còn được gọi là "tiền đề", "mệnh đề cơ sở", hay "mệnh đề nguyên tử", theo cách gọi của Wittgenstein. 

![Các quả bóng](../05_logic/balls.svg)

Trong ngữ cảnh của chính lôgic, các mệnh đề này được trừu tượng hoá đi (tức là chúng ta không trực tiếp quan tâm đến chúng), nên chúng có thể được biểu diễn bằng những quả bóng nhiều màu mà bạn đã quen. 

### Hợp thành các mệnh đề

Ở trung tâm của lôgic, cũng như trong lý thuyết phạm trù, là khái niệm *phép hợp thành* --- nếu có hai hay nhiều mệnh đề liên quan với nhau theo một cách nào đó, chúng ta có thể kết hợp chúng thành một bằng các *toán tử lôgic*, như "và", "hoặc" và "suy ra/kéo theo".

Kết quả sẽ là các mệnh đề mới, mà chúng ta có thể gọi là *mệnh đề phức hợp* (để nhấn mạnh rằng chúng không phải mệnh đề cơ sở). 

![Các mệnh đề phức hợp --- a ∧ b, a ∨ b, a -> b](../05_logic/logic_composite_propositions.svg)

Lưu ý rằng $∧$ là ký hiệu cho *và*, $∨$ là ký hiệu cho $or$, còn $\to$ là ký hiệu cho *suy ra*.

Cần nhấn mạnh rằng các mệnh đề được hợp thành từ nhiều tiền đề (biểu thị bằng những quả bóng xám chứa các quả bóng khác) hoàn toàn không khác các mệnh đề "cơ sở" (những quả bóng một màu), và chúng hợp thành theo cùng một cách (dù trong mệnh đề ngoài cùng bên trái, quả bóng xanh lá được bọc trong một quả bóng xám để sơ đồ đẹp hơn).

![Các quả bóng như những mệnh đề](../05_logic/balls_propositions.svg)

### Modus ponens

Lấy ví dụ một mệnh đề chứa nhiều tầng lồng nhau (đồng thời cũng là một cách rất hay để giới thiệu chính chủ đề lôgic), hãy xét một trong những mệnh đề cổ nhất (các nhà Khắc kỷ đã biết đến nó vào thế kỷ 3 trước Công nguyên) và nổi tiếng nhất từ trước đến nay: *modus ponens*. Nó thường được trình bày như sau:

{: .theorem}

> Nếu Socrates là người, thì Socrates phải chết.
>
> Nhưng Socrates là người.
>
> Vậy Socrates phải chết.

Hoặc chúng ta cũng có thể nói:

{: .theorem}

> Nếu trời mưa, mặt đất sẽ ướt.
> 
> Trời mưa.
> 
> Vì vậy, mặt đất sẽ ướt.

Bạn thấy khuôn mẫu rồi đấy: 

{: .definition}

> Modus ponens là một mệnh đề gồm hai mệnh đề khác, ký hiệu $A$ và $B$, phát biểu rằng nếu mệnh đề $A$ đúng, và nếu $A$ suy ra $B$ $(A \to B)$, thì $B$ cũng đúng, tức là $(A \land (A \Rightarrow B) )\to B$.

Trong ví dụ đầu tiên, nếu biết rằng "Socrates là người" ($A$) và "con người phải chết"---hay "là người kéo theo phải chết" ($A \to B$), chúng ta cũng biết rằng "Socrates phải chết" ($B$).

Đây là cách biểu diễn cùng điều ấy bằng một sơ đồ.

![Modus ponens](../05_logic/modus_ponens.svg)

Chúng ta thấy mệnh đề modus ponens được hợp thành từ hai mệnh đề khác trong quan hệ $implies$, trong đó mệnh đề $B$ là mệnh đề cơ sở, nhưng mệnh đề suy ra $B$ thì không phải (hãy gọi mệnh đề ấy là $C$ --- khi đó toàn bộ mệnh đề trở thành $C → B$).

Đi xuống thêm một tầng nữa, chúng ta nhận thấy bản thân mệnh đề $C$ được hợp thành từ hai mệnh đề trong quan hệ *và* --- $A$ và một mệnh đề khác mà chúng ta sẽ gọi là $D$ (tức là $A ∧ D$), trong đó chính $D$ cũng được hợp thành từ hai mệnh đề, lần này trong quan hệ $implies$ --- $A → B$. Nhưng tất cả những điều này được thể hiện rõ hơn trong sơ đồ.

### Quan hệ giữa các toán tử lôgic 

Bạn có thể nghĩ rằng phép hợp thành các mệnh đề lôgic giống cách kết hợp hai đối tượng của monoid thành một bằng phép toán monoid; và như đã thấy, một số phép toán lôgic quả thực tạo thành monoid.

Tuy nhiên, khác với lý thuyết monoid/nhóm, lôgic nghiên cứu các cách kết hợp không chỉ với một mà với *nhiều* phép toán lôgic, cùng *những cách chúng liên hệ với nhau*. Chẳng hạn, trong lôgic, chúng ta quan tâm đến cách các toán tử "và" và "suy ra" liên hệ với nhau trong "modus ponens". Hoặc luật phân phối của các phép toán *và* và $or$, được biểu diễn bởi *mệnh đề hằng đúng* sau (chúng ta sẽ giải thích ý nghĩa của tên gọi này sau).

![Phép phân phối của "và" và "hoặc"](../05_logic/logic_distributivity.svg)

Được rồi, chúng ta đã nhắc đến các mệnh đề hằng đúng; giờ hãy giải thích chúng là gì.

### Mệnh đề hằng đúng

Trong phần lớn trường hợp, chúng ta không thể biết một mệnh đề phức hợp đúng hay sai nếu không biết giá trị của các mệnh đề tạo nên nó. Chẳng hạn, chúng ta không thể nói "A và B" hay "A hoặc B" đúng hay không nếu không biết A hoặc B đúng hay không.

![Các mệnh đề phức hợp --- a ∧ b, a ∨ b, a -> b](../05_logic/logic_composite_propositions.svg)

Tuy nhiên, với những mệnh đề như *modus ponens*, chúng ta có thể: modus ponens *luôn đúng*. Bất kể các mệnh đề tạo nên nó ($A$ và $B$) đúng hay sai, toàn bộ mệnh đề biểu thị bởi công thức ($(A \land (A \Rightarrow B) )\to B$) luôn đúng. Nếu muốn nói cho trang trọng, chúng ta cũng có thể nói nó *đúng trong mọi mô hình của hệ lôgic*, trong đó mô hình là một tập hợp các tiền đề trong thế giới thực được coi là những gì các mệnh đề của chúng ta biểu thị.

Ví dụ, ví dụ trước của chúng ta sẽ không thôi đúng nếu *thay* "Socrates" bằng bất kỳ tên nào khác, hay thay "phải chết" bằng bất kỳ tính chất nào khác mà con người có.

![Một biến thể của modus ponens](../05_logic/modus_ponens_variations.svg)

Chúng ta gọi những mệnh đề như vậy là mệnh đề hằng đúng.

{: .definition}

> Những mệnh đề luôn đúng, bất kể giá trị của các mệnh đề tạo nên chúng, được gọi là *mệnh đề hằng đúng*. 

Còn những mệnh đề đối ứng nổi tiếng hơn của chúng, luôn sai, được gọi là *mâu thuẫn*. Bạn có thể biến mỗi mệnh đề hằng đúng thành một mâu thuẫn, hoặc ngược lại, bằng cách thêm một chữ "không". 

Các phát biểu khác, có thể đúng hoặc sai tuỳ theo giá trị của một số mệnh đề khác, được gọi là "phát biểu tuỳ thuộc". Trong lôgic, chúng ta không quan tâm đến các phát biểu tuỳ thuộc --- dù sao, chúng đã được nghiên cứu trong mọi khoa học khác (và chúng ta không giống các khoa học khác).

Mệnh đề hằng đúng đơn giản nhất là cái gọi là luật đồng nhất: phát biểu rằng mỗi mệnh đề suy ra chính nó (chẳng hạn "Mọi người đàn ông độc thân đều chưa kết hôn"). Nó có thể gợi bạn nhớ đến điều gì đó.

![Mệnh đề hằng đúng đồng nhất](../05_logic/tautology_identity.svg)

Đây là một vài mệnh đề hằng đúng phức tạp hơn (bớt nhàm chán hơn) (ký hiệu $¬$ có nghĩa là "không"/phủ định.

![Các mệnh đề hằng đúng](../05_logic/tautology_list.svg)

Chúng ta sẽ sớm học cách xác định những mệnh đề nào là hằng đúng, nhưng trước hết, hãy xem vì sao ngay từ đầu các mệnh đề hằng đúng lại quan trọng.

### Lược đồ tiên đề/Quy tắc suy luận

Các mệnh đề hằng đúng hữu ích vì chúng là cơ sở của *lược đồ tiên đề*/*quy tắc suy luận*. Và *lược đồ tiên đề* cùng *quy tắc suy luận* là điểm xuất phát để chúng ta tạo ra các phát biểu lôgic đúng khác bằng phép thay thế.

Nhận ra rằng màu sắc của các quả bóng trong modus ponens chỉ là yếu tố bề ngoài, chúng ta có thể muốn biểu diễn cấu trúc tổng quát (lược đồ) của modus ponens mà mọi biến thể đều có chung.

![Cấu trúc tổng quát của modus ponens: một cấu hình các quả bóng đen trắng biểu thị modus ponens](../05_logic/modus_ponens_schema.svg)

Từ đó, chúng ta có thể thu được bất kỳ mệnh đề modus ponens nào hợp thành từ các mệnh đề cơ sở chỉ bằng cách tô màu.

![Các biến thể của cấu trúc tổng quát của modus ponens: các bản sao của lược đồ tổng quát với các quả bóng được tô những màu khác nhau](../05_logic/modus_ponens_variations.svg)

Lưu ý rằng các mệnh đề đưa vào lược đồ không nhất thiết phải là mệnh đề cơ sở. Chẳng hạn, với mệnh đề $a$ (được biểu thị dưới đây bằng quả bóng cam) và mệnh đề phát biểu rằng $a$ suy ra $a \lor b$ (một trong những mệnh đề hằng đúng đã thấy ở trên), chúng ta có thể đưa các mệnh đề ấy vào *modus ponens* và chứng minh rằng $a \lor b$ đúng. 

![Dùng modus ponens làm quy tắc suy luận](../05_logic/modus_ponens_composite.svg)

Cấu trúc cơ bản của mệnh đề (cuốn sách tô màu trong ví dụ của chúng ta) được gọi là *lược đồ tiên đề*. Còn các mệnh đề do nó tạo ra là *tiên đề*. 

{: .definition}

> Một lược đồ tiên đề là một công thức (chứa các chỗ giữ chỗ), từ đó chúng ta có thể suy ra các mệnh đề (bằng cách thay những chỗ giữ chỗ ấy bằng các mệnh đề). 


Và *quy tắc suy luận* gần như cùng một thứ với lược đồ tiên đề; chẳng hạn, lược đồ tiên đề có thể dễ dàng được áp dụng như quy tắc suy luận, và ngược lại. 

Một lưu ý cuối: trong chương trước, chúng ta đã dùng một mệnh đề hằng đúng (modus ponens) làm lược đồ tiên đề. Hiển nhiên, chúng ta cũng có thể làm như vậy với mọi mệnh đề hằng đúng khác.

{: .theorem}

> Mọi mệnh đề hằng đúng đều có thể được dùng làm lược đồ tiên đề.

### Các hệ lôgic

Biết rằng có thể dùng lược đồ tiên đề/quy tắc suy luận để tạo ra các mệnh đề mới, chúng ta có thể hỏi liệu có thể xây dựng một họ nhỏ những lược đồ/quy tắc như vậy, được chọn sao cho chúng cho phép tạo ra *mọi* mệnh đề có thể hay không. Bạn sẽ vui (dù tôi hình dung cũng hơi khó chịu) khi biết rằng không chỉ có một, mà có nhiều họ như vậy. Và đúng thế, những họ kiểu này chính là thứ chúng ta gọi là *hệ lôgic*.

{: .definition}

> Một hệ lôgic (còn gọi là hệ hình thức) là một họ các lược đồ tiên đề/quy tắc suy luận sao cho khi áp dụng chúng, chúng ta có thể tạo ra mọi mệnh đề có thể.

Đây là một họ như vậy, gồm năm lược đồ tiên đề sau, *ngoài quy tắc suy luận modus ponens* (đây là các lược đồ tiên đề, dù chúng ta có dùng màu).

![Một họ tối thiểu các tiên đề Hilbert](../05_logic/min_hilbert.svg)

Việc chứng minh rằng hệ lôgic này và các hệ tương tự khác là đầy đủ (thực sự có thể tạo ra mọi mệnh đề khác) là công trình của Gödel, được gọi là "định lý đầy đủ Gödel" (Gödel quan trọng đến mức tôi đã tìm riêng chữ "ö" để có thể viết đúng tên ông).

### Các cách diễn giải lôgic

Giờ chúng ta đã có một ý niệm về cách các mệnh đề và toán tử lôgic hoạt động. Nhưng thực ra chúng ta chưa *nói chúng là gì* (và để chứng minh rằng chúng thực sự hoạt động, chúng ta cần biết chúng là gì).

Chúng ta chưa nói điều này vì có nhiều định nghĩa khác nhau về mệnh đề và toán tử, tạo nên những *cách diễn giải* lôgic khác nhau. Bây giờ, chúng ta sẽ xem hai cách diễn giải --- một cách rất cũ và cách còn lại tương đối gần đây. Đây sẽ là một chút đi đường vòng khỏi chủ đề thường ngày về điểm và mũi tên, nhưng tôi đảm bảo rằng nó sẽ đáng công. Vậy hãy bắt đầu.

## Lôgic cổ điển. Diễn giải theo hàm chân trị

> Ngoài thế giới mà chúng ta sống và cảm nhận mỗi ngày, còn có *thế giới ý niệm*, nơi cư ngụ của mọi ý tưởng và khái niệm biểu hiện qua các đối tượng mà chúng ta cảm nhận. Chẳng hạn, bên ngoài tất cả những người từng sống có một con người nguyên mẫu, và chúng ta là người chỉ trong chừng mực giống con người ấy; bên ngoài mọi thứ mạnh mẽ trong thế giới có khái niệm tối hậu về sức mạnh, mà tất cả chúng đều vay mượn, và điều này đúng với từng phạm trù, chẳng hạn nếu có một cái cốc thì cũng có "tính cốc". Và dù chỉ là những người phàm sống trong thế giới biểu hiện, không thể cảm nhận thế giới ý niệm, chúng ta có thể thông qua triết học "hồi tưởng" về nó và biết một số đặc điểm của nó.

Trên đây là bản tóm lược một thế giới quan của nhà triết học Hy Lạp Plato, đôi khi được gọi là *thuyết ý niệm* của Plato. Ban đầu, ngành lôgic thể hiện nỗ lực suy nghĩ và tổ chức tư tưởng sao cho chúng áp dụng được cho thế giới ý niệm này, tức theo một cách "hình thức". Ngày nay, mô hình ban đầu này của lôgic được gọi là "lôgic cổ điển". Dù mọi thứ bắt đầu với Plato, phần lớn trong đó là công trình của nhà toán học thế kỷ 20 David Hilbert.

Sự tồn tại của thế giới ý niệm hàm ý rằng, dù có nhiều thứ chúng ta, con người, không biết và sẽ chẳng bao giờ biết, ít nhất *ở đâu đó ngoài kia* vẫn có câu trả lời cho mọi câu hỏi. Trong lôgic, điều này trở thành *nguyên lý hai giá trị*, phát biểu rằng *mỗi mệnh đề hoặc đúng hoặc sai*. 

![Các giá trị Boolean --- Đúng và Sai](../05_logic/true_false.svg)

Nhờ nguyên lý này, các mệnh đề trong lôgic cổ điển có thể được biểu diễn thích hợp trong lý thuyết tập hợp bằng tập hợp Boolean, chứa hai giá trị ấy.

![Tập hợp các giá trị Boolean --- Chứa các giá trị Đúng và Sai](../05_logic/boolean_set.svg)

Khi đó, các toán tử lôgic chỉ là những hàm mà chúng ta đã quá quen.

{: .definition}

> Theo cách diễn giải lôgic cổ điển: 
>
> - Một *mệnh đề* là một thứ hoặc đúng hoặc sai (một giá trị Boolean). 
> - Một *toán tử lôgic* là một *hàm* nhận một hoặc nhiều giá trị Boolean và trả về một giá trị Boolean khác.

Hãy xem lại tất cả các toán tử lôgic trong ngữ cảnh ngữ nghĩa này.

### Phép toán *phủ định*

Hãy bắt đầu với phép phủ định. Phủ định là một phép toán một ngôi, nghĩa là một hàm chỉ nhận *một* đối số và (giống mọi toán tử lôgic khác) trả về một giá trị, trong đó cả đối số lẫn kiểu trả về đều là các giá trị Boolean.

![Phủ định](../05_logic/negation.svg)

Cũng có thể biểu diễn cùng hàm ấy bằng bảng này, theo một cách bớt cầu kỳ hơn đôi chút.

| p | ¬p |
|---| --- | 
| Đúng  | Sai  | 
| Sai  | Đúng |

Những bảng như thế này được gọi là *bảng chân trị*, và chúng xuất hiện khắp nơi trong lôgic cổ điển. Chúng không chỉ được dùng để định nghĩa toán tử mà còn để chứng minh các kết quả.

### Chứng minh kết quả bằng bảng chân trị

Sau khi định nghĩa toán tử phủ định, chúng ta có thể chứng minh tiên đề đầu tiên của hệ lôgic đã gặp, đó là *loại bỏ phủ định kép*. Trong ngôn ngữ tự nhiên, tiên đề này tương đương với nhận xét rằng nói "Tôi *không phải là không thể* làm X" cũng giống như nói "Tôi *có thể* làm việc đó". 

![Công thức loại bỏ phủ định kép](../05_logic/double_negation_formula.svg)

(dù có vẻ hiển nhiên, tiên đề phủ định kép có lẽ là kết quả gây tranh cãi nhất trong lôgic; chúng ta sẽ thấy vì sao sau.)

Nếu xem các toán tử lôgic là những hàm từ và đến tập hợp các giá trị Boolean, thì việc chứng minh tiên đề gồm hợp thành một số hàm ấy thành một hàm và quan sát đầu ra của nó. Cụ thể hơn, chứng minh công thức trên chỉ gồm việc hợp thành hàm phủ định với chính nó, rồi xác nhận rằng nó để chúng ta ở đúng chỗ ban đầu.

![Loại bỏ phủ định kép](../05_logic/double_negation_proof.svg)

Nếu muốn nói một cách hình thức, chúng ta có thể nói áp dụng phủ định hai lần tương đương với áp dụng hàm *đồng nhất*.

![Hàm đồng nhất cho các giá trị Boolean](../05_logic/boolean_identity.svg)

Nếu đã chán các sơ đồ, chúng ta cũng có thể biểu diễn sơ đồ hợp thành trên bằng một bảng. 

| p | ¬p | ¬¬p |
|---| --- | --- |
| Đúng  | Sai  | Đúng |
| Sai  | Đúng | Sai |

Mỗi mệnh đề trong lôgic cổ điển đều có thể được chứng minh bằng những sơ đồ/bảng như vậy.

### Các phép toán Và và Hoặc

Được rồi, *bạn* biết *và* nghĩa là gì, và *tôi* cũng biết, nhưng còn những người phiền phức muốn mọi thứ được đặc tả hình thức thì sao (nháy mắt, nháy mắt)? Chúng ta đã biết cách làm họ hài lòng --- chỉ cần xây dựng hàm Boolean biểu diễn *và*. 

Vì *và* là một toán tử *hai ngôi*, thay vì một giá trị đơn, hàm sẽ nhận một *cặp* giá trị Boolean.

![Và](../05_logic/and.svg)

Đây là bảng chân trị tương ứng (trong đó $∧$ là ký hiệu cho *và*).

| p |	q | p ∧ q |
|---| --- | ---   |
| Đúng  | Đúng  | Đúng  |
| Đúng  | Sai | Sai |
| Sai | Đúng  | Sai |
| Sai | Sai | Sai |

Chúng ta có thể làm tương tự với $or$; đây là bảng.

| p |	q | p ∨ q |
|---| --- | ---   |
| Đúng  | Đúng  | Đúng  |
| Đúng  | Sai | Đúng  |
| Sai | Đúng  | Đúng  |
| Sai | Sai | Sai |

**Bài tập 1:** Vẽ sơ đồ cho *hoặc*.

Dùng các bảng này, chúng ta cũng có thể chứng minh một số lược đồ tiên đề để dùng về sau:

- Với *Và*: $p ∧ q → p$ và $p ∧ q → q$ "Nếu tôi mệt và đói, thì điều đó có nghĩa là tôi đói".
- Với *Hoặc*:  $p → p ∨ q$ và $q → p ∨ q$ "Nếu tôi có một cây bút, thì điều đó có nghĩa là tôi có một cây bút hoặc một cây thước".

### Phép toán Suy ra

Bây giờ, hãy xem một điều bớt hiển nhiên hơn: phép toán *suy ra* (còn gọi là *điều kiện vật chất*). Phép toán này gắn hai mệnh đề với nhau sao cho tính đúng của mệnh đề thứ nhất kéo theo tính đúng của mệnh đề thứ hai (hay mệnh đề thứ nhất là một *điều kiện cần* cho mệnh đề thứ hai). Bạn có thể đọc $p → q$ là "nếu $p$ đúng, thì $q$ cũng phải đúng. 

Suy ra cũng là một hàm hai ngôi --- nó được biểu diễn bằng một hàm từ một cặp có thứ tự các giá trị Boolean đến một giá trị Boolean.

| p |	q | p → q |
|---| --- | ---   |
| Đúng  | Đúng  | Đúng  |
| Đúng  | Sai | Sai |
| Sai | Đúng  | Đúng  |
| Sai | Sai | Đúng  |

Có một số khía cạnh ở đây không hiển nhiên, nên hãy xem từng trường hợp.

1. Nếu $p$ đúng và $q$ cũng đúng, thì $p$ quả thực suy ra $q$ --- hiển nhiên.
2. Nếu $p$ đúng nhưng $q$ sai, thì $q$ không suy ra từ $p$ --- vì nếu có, $q$ đã đúng.
3. Nếu $p$ sai nhưng $q$ đúng, thì $p$ vẫn suy ra $q$. Cái quái gì vậy? Hãy nhớ rằng nói $p$ suy ra $q$ không phải là nói hai mệnh đề phụ thuộc lẫn nhau 100%. Chẳng hạn, khẳng định "uống rượu gây đau đầu" không có nghĩa là uống rượu là nguồn duy nhất gây đau đầu.
4. Và cuối cùng, nếu $p$ sai và $q$ cũng sai, thì $p$ vẫn suy ra $q$ (chỉ là vào một ngày khác).

Có lẽ sẽ dễ hơn nếu bạn nhớ rằng trong lôgic cổ điển, $p → q$ ($p$ suy ra $q$) đúng khi $\neg p ∨ q$ (hoặc $p$ sai hoặc $q$ đúng). 

### Phép toán Khi và chỉ khi

Bây giờ, hãy xem phép toán cho biết hai mệnh đề tương đương (hay một mệnh đề là *điều kiện cần và đủ* cho mệnh đề kia (điều này tự nó hàm ý rằng chiều ngược lại cũng đúng)). Phép toán này cho kết quả đúng khi hai mệnh đề có cùng giá trị.

| p |	q | p ↔ q |
|---| --- | ---   |
| Đúng  | Đúng  | Đúng  |
| Đúng  | Sai | Sai |
| Sai | Đúng  | Sai |
| Sai | Sai | Đúng  |

Một sự kiện thú vị về phép toán $A ↔ B$ là nó có thể được xây dựng bằng phép toán *suy ra* --- nó tương đương với việc mỗi mệnh đề suy ra mệnh đề kia. 

{: theorem}

> Với bất kỳ $P$ và $Q$ nào, $P \leftrightarrow Q$ đúng chính xác khi $P \to Q \land Q \to P$)

Chúng ta có thể dễ dàng chứng minh điều này bằng cách so sánh các bảng chân trị.

| p |	q | p → q | q → p | p → q ∧ q → p|  
|---| --- | ---   | --- | --- |
| Đúng  | Đúng  | Đúng  | Đúng | Đúng | 
| Đúng  | Sai | Sai | Đúng | Sai | 
| Sai | Đúng  | Đúng  | Sai  | Sai | 
| Sai | Sai | Đúng  | Đúng | Đúng | 

Vì vậy, phép toán tương đương được gọi là "khi và chỉ khi", hay viết tắt là "iff".

### Chứng minh kết quả bằng tiên đề/quy tắc suy luận

Hãy xét công thức phát biểu rằng $p → q$ giống với $¬p ∨ q$. 

![Công thức Hilbert](../05_logic/hilbert_formula.svg)

Chúng ta có thể dễ dàng chứng minh điều này bằng bảng chân trị.

| p |	q | p → q | ¬p  | q   |  ¬p ∨ q |
|---| --- | ---   | --- | --- | --- |
| Đúng  | Đúng  | **Đúng**  | Sai | Đúng | **Đúng** |
| Đúng  | Sai | **Sai** | Sai | Sai | **Sai** |
| Sai | Đúng  | **Đúng**  | Đúng  | Đúng | **Đúng** |
| Sai | Sai | **Đúng**  | Đúng  | Sai | **Đúng** |

Nhưng sẽ trực quan hơn nhiều nếu làm điều đó bằng các tiên đề và quy tắc suy luận. Để làm vậy, chúng ta bắt đầu với công thức đã có ($p → q$) cùng các lược đồ tiên đề, rồi đi đến công thức muốn chứng minh ($¬p ∨ q$). 

Đây là một cách thực hiện. Các công thức dùng ở mỗi bước được ghi ở phía bên phải; quy tắc suy luận là modus ponens.

![Chứng minh Hilbert](../05_logic/hilbert_proof.svg)

Lưu ý rằng để thực sự chứng minh hai công thức tương đương, chúng ta còn phải làm theo chiều ngược lại (bắt đầu với ($¬p ∨ q$) và ($p → q$)).

## Lôgic trực giác. Diễn giải BHK


> [...] lôgic là sự sống trong não người; nó có thể đi cùng sự sống bên ngoài não, nhưng không bao giờ có thể dẫn dắt sự sống ấy bằng sức mạnh riêng của mình. --- L.E.J. Brouwer

Tôi không biết bạn thấy thế nào, nhưng tôi cảm thấy cách diễn giải lôgic cổ điển theo hàm chân trị (dù hoạt động được và đúng theo cách riêng của nó) không phù hợp lắm với khuôn khổ phạm trù đang dùng ở đây: nó quá ở "mức thấp", dựa vào việc thao tác các giá trị của mệnh đề. Theo cách diễn giải này, các phép toán *và* và *hoặc* chỉ là 2 trong 16 phép toán lôgic hai ngôi có thể, và chúng không thực sự liên hệ với nhau (nhưng chúng ta biết rằng thực ra chúng có liên hệ).

Vì những lý do này cùng những lý do khác, vào thế kỷ 20, một trường phái lôgic hoàn toàn mới được thành lập, gọi là *lôgic trực giác*. Nếu xem lôgic cổ điển dựa trên *lý thuyết tập hợp*, thì lôgic trực giác sẽ dựa trên *lý thuyết phạm trù* cùng các lý thuyết liên quan. Nếu *lôgic cổ điển* dựa trên thuyết ý niệm của Plato, thì chủ nghĩa trực giác bắt đầu với một ý tưởng triết học xuất phát từ Kant và Schopenhauer: thế giới như chúng ta trải nghiệm phần lớn được định trước bởi những cảm nhận của chúng ta về nó. Vì thế, khi không có những chuẩn mực tuyệt đối về chân lý, chứng minh một mệnh đề trở thành thứ bạn *xây dựng*, thay vì thứ bạn khám phá.

Lôgic cổ điển và lôgic trực giác khác nhau ngay từ đầu: vì theo lôgic trực giác, chúng ta *xây dựng* chứng minh thay vì *khám phá* chúng như một chân lý phổ quát nào đó, chúng ta *bỏ nguyên lý hai giá trị*. Nghĩa là, trong lôgic trực giác, chúng ta không có cơ sở để khẳng định rằng mỗi phát biểu nhất thiết phải *đúng hoặc sai*. Chẳng hạn, có thể có những phát biểu không chứng minh được không phải vì chúng sai, mà đơn giản vì chúng nằm ngoài phạm vi của một hệ lôgic cho trước (giả thuyết số nguyên tố sinh đôi thường được đưa ra làm ví dụ). 

Dù sao, lôgic trực giác không có tính hai giá trị, tức là chúng ta không thể quy mọi mệnh đề về đúng và sai. 

![Sự phân đôi Đúng/Sai](../05_logic/true_false.svg)

Nhưng vẫn có một điều chúng ta *còn* giữ được --- vẫn có những mệnh đề "đúng" theo nghĩa đã có chứng minh cho chúng --- các mệnh đề cơ sở. Vì vậy, với một số lưu ý (chúng ta sẽ gặp sau), tính hai giá trị giữa mệnh đề đúng và sai có thể được xem là giống tính hai giá trị giữa sự tồn tại hoặc vắng mặt của chứng minh cho một mệnh đề cho trước --- hoặc có chứng minh, hoặc không có.

![Sự phân đôi Đã chứng minh/Chưa chứng minh](../05_logic/proved_unproved.svg)

Tính hai giá trị này nằm ở trung tâm của cái gọi là diễn giải lôgic Brouwer–Heyting–Kolmogorov (BHK), mà chúng ta sẽ xem tiếp theo.

Đây là một định nghĩa của diễn giải BHK (lưu ý rằng trong diễn giải BHK, khái niệm chính không phải là mệnh đề, mà là chứng minh).

{: .definition}

> Theo diễn giải lôgic BHK: 
>
> - Một *mệnh đề* là một thứ có chứng minh.
> - Một *toán tử lôgic* là một cách xây dựng tạo ra các chứng minh từ những chứng minh khác.

Cách phát biểu ban đầu của diễn giải BHK không dựa vào một lý thuyết toán học cụ thể nào. Ở đây, trước hết chúng ta sẽ minh hoạ nó bằng ngôn ngữ lý thuyết tập hợp (chỉ để có thể bỏ ngôn ngữ ấy đi sau đó một chút).

### Các phép toán Và và Hoặc

Vì sự tồn tại của chứng minh cho một mệnh đề được coi là có nghĩa mệnh đề ấy đúng, định nghĩa *và* khá đơn giản --- chứng minh cho mệnh đề $A ∧ B$

![Và trong diễn giải cổ điển](../05_logic/classical_and.svg)

...chỉ là *một cặp* chứa một chứng minh của $A$ và một chứng minh của $B$, tức là *một tích* của hai chứng minh!

![Và trong diễn giải BHK](../05_logic/bhk_and.svg)

{: .definition}

> Theo diễn giải BHK, một chứng minh của $A \land B$ là một tích của các chứng minh của $A$ và $B$ ($A \times B$).

Nguyên tắc xác định mệnh đề đúng hay sai giống với các mệnh đề cơ sở --- nếu cặp chứng minh của $A$ và $B$ tồn tại (tức là cả hai chứng minh đều tồn tại), thì có thể xây dựng chứng minh của $A \land B$ (và do đó $A \land B$ là "đúng").

**Bài tập 2:** Phép toán **hoặc** sẽ là gì trong trường hợp này?

### Phép toán Suy ra

Giờ đến điều bất ngờ: trong diễn giải BHK, phép toán *suy ra* chỉ là một *hàm* giữa các chứng minh. 

![Suy ra trong diễn giải BHK](../05_logic/bhk_implies.svg)

{: .definition}
 
> Theo diễn giải BHK, nói rằng $A$ suy ra $B$ ($A \to B$) chỉ có nghĩa là tồn tại một mũi tên (hàm) có thể chuyển một chứng minh của $A$ thành một chứng minh của $B$. 

Vậy chứng minh rằng $A$ suy ra $B$ là gì? Một chứng minh rằng $A$ suy ra $B$ chỉ là một phần tử của tập hợp các hàm đi từ $A$ đến $B$, tức là *tập hom* của $A \Rightarrow B$ --- nếu tập hợp này rỗng, thì không có chứng minh (tức là không có cách chuyển một chứng minh của $A$ thành một chứng minh của $B$).

![Đối tượng suy ra trong diễn giải BHK](../05_logic/bhk_implies_object.svg)

{: .definition}

> Tập hợp các chứng minh của $A \to B$ là tập hom từ $A$ đến $B$ ($A \Rightarrow B$).

### Phép toán Khi và chỉ khi

Trong diễn giải BHK, chúng ta không có phép toán Khi và chỉ khi. Nhưng chúng ta có các mũi tên.

![Suy ra trong diễn giải BHK](../05_logic/bhk_iff.svg)

Trong phần về lôgic cổ điển, chúng ta đã chứng minh hai mệnh đề $A$ và $B$ tương đương nếu $A$ suy ra $B$ và $B$ suy ra $A$. Nhưng nếu phép toán *suy ra* chỉ là một hàm, thì các mệnh đề tương đương chính xác khi có hai hàm chuyển mỗi mệnh đề thành mệnh đề kia, tức là khi các tập hợp chứa các mệnh đề ấy *đẳng cấu*.

(Có lẽ chúng ta nên lưu ý rằng *không phải mọi hàm của lý thuyết tập hợp đều là chứng minh*, chỉ có một tập hợp được chỉ định trong số chúng (mà chúng ta gọi là các hàm *chính tắc*). Nghĩa là, trong lý thuyết tập hợp, bạn có thể dựng các hàm và đẳng cấu giữa bất kỳ cặp tập hợp đơn phần tử nào, nhưng điều đó không có nghĩa là mọi chứng minh đều tương đương.)

### Phép toán Phủ định

Vậy theo diễn giải BHK, nói $A$ đúng có nghĩa là chúng ta có một chứng minh của $A$ --- khá đơn giản. Nhưng biểu đạt việc $A$ sai thì khó hơn đôi chút: nói chúng ta *không có chứng minh* của $A$ là chưa đủ (việc chúng ta không có nó không có nghĩa là nó không tồn tại). Thay vào đó, chúng ta phải chỉ ra rằng khẳng định $A$ đúng dẫn đến một *mâu thuẫn*.

Để biểu diễn điều này, lôgic trực giác định nghĩa hằng $⊥$ đóng vai trò *Sai* (còn gọi là "giá trị đáy"). $⊥$ được định nghĩa là chứng minh của một công thức không có chứng minh nào. Và các mệnh đề tương đương với mệnh đề sai là những mệnh đề suy ra rằng giá trị đáy có thể được chứng minh (đây là một mâu thuẫn). Vậy thay vì...

![Phủ định trong diễn giải cổ điển: Không A](../05_logic/classical_negation.svg)

...chúng ta có thể viết:

![Phủ định trong diễn giải BHK: A suy ra Đáy](../05_logic/bhk_negation.svg)

{: .theorem}

> Theo diễn giải BHK, $\lnot A$ có thể được đọc là $A \to \bot$

Trong lý thuyết tập hợp, hằng $⊥$ được biểu diễn bằng tập hợp rỗng.

![Sai trong diễn giải BHK](../05_logic/bhk_false.svg)

Và nhận xét rằng các mệnh đề được nối với giá trị đáy là sai được biểu diễn bằng sự kiện sau: nếu một mệnh đề đúng, tức là tồn tại chứng minh của nó, thì không thể có hàm từ nó đến tập hợp rỗng.

![Sai trong diễn giải BHK](../05_logic/bhk_false_function.svg)

Cách duy nhất để có một hàm như vậy là tập hợp các chứng minh của mệnh đề ấy cũng rỗng.

![Sai trong diễn giải BHK](../05_logic/bhk_false_function_2.svg)

**Bài tập 3:** Tra lại định nghĩa hàm và xác nhận rằng không thể tồn tại hàm từ bất kỳ tập hợp nào *đến tập hợp rỗng* 

**Bài tập 4:** Tra lại định nghĩa hàm và xác nhận rằng có tồn tại một hàm *từ tập hợp rỗng* đến chính nó (thực ra có một hàm từ tập hợp rỗng đến bất kỳ tập hợp nào khác.


<!--
{% if site.distribution == 'print' %}
-->
### Phần xen kẽ: Luật bài trung

Dù lôgic trực giác rất khác lôgic cổ điển về *ngữ nghĩa*, tức cách xây dựng toàn bộ hệ thống (đã mô tả ở trên), thực ra nó không khác nhiều về *cú pháp*. Nghĩa là, nếu thử suy ra các lược đồ tiên đề/quy tắc suy luận tương ứng với định nghĩa của các cấu trúc đã nêu trên, chúng ta sẽ thấy chúng gần như giống những lược đồ/quy tắc định nghĩa lôgic cổ điển. Tuy nhiên, có một ngoại lệ liên quan đến *tiên đề loại bỏ phủ định kép* đã gặp trước đó, mà một phiên bản của nó được gọi là *luật bài trung*.

![Công thức của nguyên lý bài trung](../05_logic/excluded_middle_formula.svg)

{: .theorem}

> Luật bài trung có hiệu lực trong lôgic cổ điển và đúng khi nhìn vào các bảng chân trị của nó, nhưng không có cơ sở cho nó theo diễn giải BHK. 

Vì sao? Trong lôgic trực giác, nói một điều sai có nghĩa là *xây dựng một chứng minh* rằng nó sai (rằng nó suy ra giá trị đáy), và không có phương pháp/hàm/thuật toán nào có thể chứng minh một mệnh đề cho trước là đúng và sai.


Câu hỏi liệu có thể dùng luật bài trung hay không đã làm nảy sinh một cuộc tranh luận gay gắt giữa người ủng hộ lôgic cổ điển David Hilbert và người ủng hộ lôgic trực giác L.E.J. Brouwer, được gọi là *cuộc tranh luận Brouwer–Hilbert*.

<!--
{%endif%}
-->

## Các hệ lôgic như phạm trù

Bên cạnh việc là một phương án thay cho lôgic cổ điển, diễn giải BHK còn thú vị vì nó cung cấp góc nhìn về lôgic ở mức cao hơn mà chúng ta cần để xây dựng một cách diễn giải dựa trên lý thuyết phạm trù. 

Những cách diễn giải lôgic ở mức cao hơn như vậy đôi khi được gọi là diễn giải *đại số*, trong đó *đại số* là tên gọi bao quát mọi cấu trúc có thể được biểu diễn bằng lý thuyết phạm trù, như nhóm và thứ tự.

Vậy có lẽ bạn đã đoán được: 

{: .definition}

> Một số phạm trù có thể được xem như hệ lôgic: đối tượng là mệnh đề và cấu xạ là chứng minh. 

Nhưng như thường lệ, có một lưu ý --- không phải mọi phạm trù đều có thể được chuyển thành hệ lôgic, chỉ một số trong đó. Vì vậy, để hoàn tất định lý, chúng ta sẽ liệt kê các tiêu chí mà một phạm trù cho trước phải tuân theo để có tính "lôgic". Các tiêu chí này phải đảm bảo phạm trù có một đối tượng tương ứng với mỗi mệnh đề lôgic hợp lệ, và không có đối tượng nào tương ứng với các mệnh đề không hợp lệ. 

![Lôgic như một phạm trù](../05_logic/logic_curry_category.svg)

Các phạm trù tuân theo những tiêu chí này được gọi là *phạm trù bicartesian đóng*. Nhưng trước khi mô tả trực tiếp chúng, chúng ta sẽ bắt đầu với các cấu trúc tương tự mà đơn giản hơn đã tìm hiểu --- các thứ tự.

**Bài tập 5:** Có một loại ngôn ngữ lập trình đặc biệt gọi là "trợ lý chứng minh", giúp bạn kiểm tra các chứng minh lôgic. Hãy cài một trợ lý chứng minh và thử tìm hiểu cách nó hoạt động. Tôi đề xuất Coq Tutorial của Mike Nahas cho Coq/Roql, Natural Numbers Game cho Lean, hoặc HoTT Game cho Agda.

**Bài tập 6:** Chúng ta sẽ tập trung chứng minh một số phạm trù tạo thành các hệ lôgic. Nhưng trong lúc đó, bạn có thể chứng minh rằng mọi hệ lôgic đều tạo thành phạm trù bằng định nghĩa phạm trù đã dùng trong chương trước. 

### Các hệ lôgic như thứ tự

Chúng ta đã thấy rằng một hệ lôgic cùng một tập hợp các mệnh đề cơ sở tạo thành một phạm trù.

![Lôgic như một tiền thứ tự](../05_logic/logic_category.svg)

Nếu giả sử chỉ có một cách đi từ mệnh đề $A$ đến mệnh đề $B$ (hoặc có nhiều cách nhưng chúng ta không quan tâm đến sự khác biệt giữa chúng), thì lôgic không chỉ là phạm trù mà còn là một *tiền thứ tự*:

{: .definition}

> Một số tiền thứ tự có thể được xem như hệ lôgic: các phần tử là mệnh đề, và quan hệ "lớn hơn" được hiểu là "suy ra", tức là ($A \to B$ là $A ≤ B$).

![Lôgic như một tiền thứ tự](../05_logic/logic_preorder.svg)

Hơn nữa, nếu coi các mệnh đề suy ra lẫn nhau (hay các tập hợp mệnh đề được chứng minh bằng cùng một chứng minh) là tương đương, thì lôgic là một *thứ tự bộ phận* thực sự.

![Lôgic như một thứ tự](../05_logic/logic_order.svg)

Vì vậy, nó có thể được biểu diễn bằng sơ đồ Hasse, trong đó $A \to B$ chỉ khi $A$ nằm dưới $B$ trong sơ đồ.

![Lôgic như một thứ tự](../05_logic/logic_hasse.svg)

Đây là một điều khá đặc trưng cho lý thuyết phạm trù --- xem xét một khái niệm trong một phiên bản hạn chế hơn của phạm trù (trong trường hợp này là thứ tự), để mọi thứ đơn giản hơn với chúng ta. 

Bây giờ, hãy xem xét câu hỏi đã đặt ra trước đó --- chính xác những ~~phạm trù~~ thứ tự nào biểu diễn lôgic, và một thứ tự phải tuân theo những luật nào để đẳng cấu với một hệ lôgic? Chúng ta sẽ thử trả lời câu hỏi này khi xem lại các thành phần của lôgic, lần này trong ngữ cảnh thứ tự.

### Các phép toán Và và Hoặc

Đến lúc này, có lẽ bạn đã nhận ra rằng các phép toán *và* và *hoặc* là cơm và thức ăn của lôgic (dù không rõ cái nào là cái nào). Như đã thấy, trong diễn giải BHK, chúng được biểu diễn bằng *tích* và *tổng* tập hợp. Các cấu trúc tương ứng trong lý thuyết thứ tự là *phép gặp* và *phép nối* (theo ngôn ngữ lý thuyết phạm trù là *tích* và *đối tích*).

![Phép gặp và phép nối trong thứ tự](../05_logic/lattice_meet_join.svg)

Lôgic cho phép bạn kết hợp hai mệnh đề bất kỳ trong quan hệ *và* hoặc *hoặc*. Vì thế, để một thứ tự có tính "lôgic" (là một biểu diễn đúng của một hệ lôgic), *nó phải có phép gặp ($meet$) và phép nối ($join$) cho mọi phần tử*. Tình cờ, chúng ta đã biết những thứ tự như vậy được gọi là gì --- chúng được gọi là *dàn*.

{: .definition}

> Một thứ tự có phép gặp và phép nối cho mọi phần tử được gọi là dàn.

Và có một luật quan trọng của các phép toán *và* và *hoặc* không phải lúc nào cũng có trong mọi dàn. Nó liên quan đến mối liên hệ giữa hai phép toán, tức cách chúng phân phối với nhau.

{: .definition}

> Một dàn có tính phân phối nếu, với mỗi bộ ba đối tượng $A$, $B$ và $C$, ta có $A ∧ (B ∨ C) \cong (A ∧ B) ∨ (A ∧ C)$.

Khoan, chúng ta đã nghe về dàn phân phối ở đâu trước đây rồi nhỉ? Trong chương trước, chúng ta đã nói chúng đẳng cấu với các *thứ tự bao hàm*, tức thứ tự của các tập hợp chứa một họ phần tử cho trước, và chứa *mọi tổ hợp* của một tập hợp phần tử cho trước. Việc chúng lại xuất hiện không phải tình cờ --- các thứ tự có tính "lôgic" đẳng cấu với các thứ tự bao hàm. Để hiểu vì sao, bạn chỉ cần nghĩ về diễn giải BHK --- các phần tử tham gia vào quan hệ bao hàm là các mệnh đề cơ sở của chúng ta. Còn các tập hợp được bao hàm là mọi tổ hợp của những phần tử này trong quan hệ *hoặc* (để đơn giản, chúng ta đang bỏ qua phép toán *và*).

![Một tập có thứ tự bộ phận pha màu, sắp theo quan hệ bao hàm](../05_logic/logic_poset_inclusion.svg)

Các phép toán *hoặc* và *và* (hay tổng quát hơn là *đối tích* và *tích*) dĩ nhiên là đối ngẫu phạm trù, điều này giải thích vì sao các ký hiệu biểu diễn chúng, $\lor$ và $\land$, là cùng một ký hiệu nhưng được lật theo chiều dọc. Ngay cả bản thân ký hiệu cũng trông giống một cách biểu diễn các mũi tên hội tụ (dù có lẽ không phải vậy, vì ký hiệu này đã được dùng từ rất lâu trước khi có sơ đồ Hasse).

### Phép toán *phủ định*

Để một dàn phân phối biểu diễn một hệ lôgic, nó còn phải có các đối tượng tương ứng với những giá trị *Đúng* và *Sai* (được viết là $\top$ và $\bot$). Nhưng để yêu cầu những đối tượng này tồn tại, trước hết chúng ta phải tìm cách xác định chúng là gì bằng ngôn ngữ lý thuyết thứ tự/phạm trù.

Một kết quả nổi tiếng trong lôgic, gọi là *nguyên lý bùng nổ*, phát biểu rằng nếu có một chứng minh của *Sai* (viết là $\bot$), tức là có phát biểu "*Sai* là đúng" theo thuật ngữ lôgic cổ điển, thì bất kỳ phát biểu nào khác cũng có thể được chứng minh. Chúng ta cũng biết rằng không có phát biểu đúng nào suy ra *Sai* (thực ra, trong lôgic trực giác, đây là định nghĩa của một phát biểu đúng). Dựa vào các tiêu chí này, chúng ta biết đối tượng *Sai* sẽ có dạng sau khi so với các đối tượng khác:

![Sai, biểu diễn bằng sơ đồ Hasse](../05_logic/lattice_false.svg)

Quay lại diễn giải BHK, chúng ta thấy tập hợp rỗng thoả mãn cả hai điều kiện.

![Sai, biểu diễn bằng sơ đồ Hasse](../05_logic/lattice_false_bhk.svg)

Ngược lại, chứng minh của *Đúng*, viết là $\top$, biểu đạt phát biểu "*Đúng* là đúng", là hiển nhiên và không nói lên điều gì, nên *không có gì suy ra từ nó*, nhưng đồng thời nó được suy ra từ mọi phát biểu khác.

![Đúng, biểu diễn bằng sơ đồ Hasse](../05_logic/lattice_true.svg)

Vậy *Đúng* và *Sai* chỉ là các đối tượng *lớn nhất* và *nhỏ nhất* của thứ tự (theo ngôn ngữ lý thuyết phạm trù là đối tượng *cuối* và *đầu*). Đây là một ví dụ nữa của khái niệm đối ngẫu phạm trù --- $\top$ và $\bot$ đối ngẫu với nhau, điều rất hợp lý nếu bạn nghĩ về nó, và cũng giúp chúng ta nhớ các ký hiệu (dù nếu bạn giống tôi, sẽ mất một năm trước khi thôi tự hỏi ký hiệu nào là cái nào mỗi lần nhìn thấy chúng). 
![Toàn bộ hệ lôgic, biểu diễn bằng sơ đồ Hasse](../05_logic/lattice_true_false.svg)

{: .definition}
> Một dàn có phần tử nhỏ nhất và lớn nhất được gọi là một *dàn bị chặn*.

Vậy tóm lại, dàn phân phối của chúng ta không chỉ phải có *tính phân phối*, mà còn phải *bị chặn*, tức phải có phần tử lớn nhất và nhỏ nhất (đóng vai trò *Đúng* và *Sai*).

### Phép toán *suy ra*

Có một điều kiện cuối cùng cho dàn biểu diễn lôgic của chúng ta. 

Như đã nói, mỗi dàn đều có cách biểu diễn việc các mệnh đề suy ra nhau (tức là có các mũi tên).

![Một mũi tên (kéo theo): A -> B](../05_logic/implies.svg)

...nhưng để thực sự biểu diễn một hệ lôgic, dàn còn phải có các *đối tượng kéo theo*, tức là cần có một "đối tượng suy ra" duy nhất $A \Rightarrow B$ cho mỗi cặp đối tượng $A$ và $B$, biểu diễn mệnh đề $A$ suy ra $B$.

![Một đối tượng mũi tên: đối tượng biểu diễn A -> B](../05_logic/implies_objects.svg)

Trong lý thuyết tập hợp, đối tượng này chỉ là "tập hợp đồng cấu", tập hợp các mũi tên, nhưng ở đây chúng ta đang làm lý thuyết phạm trù, nên sẽ mô tả đối tượng này theo cách của phạm trù: định nghĩa một cấu trúc gồm các đối tượng và mũi tên mà $A \Rightarrow B$ tham gia. 

Và cấu trúc này thực ra là sự tái hiện trong phạm trù của quy tắc suy luận yêu thích của chúng ta, *modus ponens*.

![Phép toán suy ra](../05_logic/implies_modus_ponens.svg)

Modus ponens là cốt lõi của phép toán *suy ra*, và vì đã biết các phép toán mà nó chứa (*và* và *suy ra*) được biểu diễn trong dàn như thế nào, chúng ta có thể dùng trực tiếp nó làm định nghĩa, bằng cách nói rằng đối tượng $A → B$ là đối tượng mà quy tắc modus ponens đúng với nó.

{: .definition}

> Đối tượng kéo theo $A \Rightarrow B$ là một đối tượng liên hệ với các đối tượng $A$ và $B$ sao cho $A ∧ (A \Rightarrow B) → B$.

Tuy nhiên, định nghĩa này chưa đầy đủ, vì (như thường lệ) $A \Rightarrow B$ *không phải đối tượng duy nhất* phù hợp với công thức này. Chẳng hạn, tập hợp $A \Rightarrow B ∧ C$ cũng là một đối tượng như vậy, và $A \Rightarrow B ∧ C ∧ D$ cũng thế. 
![Phép toán suy ra với tính chất phổ dụng](../05_logic/implies_modus_ponens_impostors.svg)

Vậy làm thế nào để phân biệt đối tượng thật với tất cả những đối tượng "giả mạo" này? Nếu nhớ các định nghĩa của *tích trong phạm trù* (hay cấu trúc tương ứng với nó trong thứ tự là *phép gặp*), bạn đã biết chuyện này sẽ đi đến đâu: chúng ta nhận ra rằng $A \Rightarrow B$ là *giới hạn* trên của $A \Rightarrow B ∧ C$. Vì vậy, $A \Rightarrow B ∧ C ∧ D$ và mọi công thức giả mạo khác có thể thay cho $X$ trong $A ∧ X → B$ đều nằm dưới nó. 

![Phép toán suy ra với tính chất phổ dụng](../05_logic/implies_universal_property.svg)

Mối quan hệ này có thể được mô tả theo nhiều cách.

Khi nghĩ theo *thứ tự*, chúng ta có thể nói:

{: .definition}

> Với bất kỳ hai phần tử $A$ và $B$ trong một thứ tự, *phần tử mũ* $A \Rightarrow B$ (còn gọi là *phần bù giả tương đối* của $A$ đối với $B$) là đối tượng *lớn nhất/cao nhất* $X$ sao cho phép gặp của $X$ và $A$ nhỏ hơn $B$, tức là $(A ∧ X) → B$  (tức $A ∧ (A \Rightarrow B) → B$).

Về mặt lôgic, chúng ta nói:

{: .definition}

> Với bất kỳ mệnh đề $A$ và $B$ nào, *mệnh đề kéo theo* $A \Rightarrow B$ (còn gọi là *hệ quả*) là mệnh đề *hiển nhiên* nhất $X$ thoả mãn công thức $A ∧ X → B$ (tức $A ∧ (A \Rightarrow B) → B$).

Cuối cùng, đây là một định nghĩa *phạm trù* tổng quát:

{: .definition}

> Với bất kỳ đối tượng $A$ và $B$ nào, *đối tượng mũ* (còn gọi là *đối tượng đồng cấu bên trong*), ký hiệu $A \Rightarrow B$, là đối tượng $X$ sao cho: 
> 1. Tích của $X$ và $A$ được nối với $B$ bằng một cấu xạ, tức là $(A \times X) → B$  (tức $A \times (A \Rightarrow B) → B$).
> 2. Với bất kỳ đối tượng mũ giả mạo $I$ nào cũng có một cấu xạ như vậy, phải tồn tại một hàm duy nhất (gọi là cấu xạ phổ dụng) với chữ ký kiểu $g: I \to A \to B$, chuyển đối tượng mũ giả mạo thành đối tượng mũ thật, sao cho cấu xạ nối kẻ giả mạo với $B$ là kết quả của phép hợp thành của $g$.

Sự tồn tại của đối tượng kéo theo này là điều kiện cuối cùng để một thứ tự/dàn là một biểu diễn của lôgic.

Lưu ý rằng định nghĩa đối tượng kéo theo này có hiệu lực riêng cho lôgic trực giác. Với lôgic cổ điển, định nghĩa đơn giản hơn: vì có luật bài trung, trong đó $A \Rightarrow B$ chỉ là một cách viết khác của $\lnot A ∨ B$.  

Lưu ý rằng, như thường lệ, chúng ta coi các đối tượng đẳng cấu là bằng nhau: có thể có nhiều đối tượng đóng vai trò $A \Rightarrow B$ với một số $A$ và $B$, nhưng chúng sẽ đẳng cấu với nhau; tức là, giống như phép gặp và phép nối, đối tượng kéo theo được định nghĩa *sai khác một đẳng cấu (duy nhất)*.

### Định nghĩa hình thức cho thứ tự

Chúng ta đã nói về rất nhiều thứ; giờ là lúc đưa ra các định nghĩa. Chúng ta đã thấy lôgic trực giác gồm các giá trị *Đúng* và *Sai* cùng các phép toán *và* *hoặc* và *suy ra*.

![Một đại số Heyting](../05_logic/logic_operations.svg)

Như đã nói, các thứ tự có tính "lôgic" (đáp ứng tất cả các điều kiện ấy) có tên riêng. Chúng được gọi là *đại số Heyting*.

{: .definition}

> Một thứ tự có phép nối/phép gặp, các đối tượng lớn nhất/nhỏ nhất và một đối tượng kéo theo được gọi là đại số Heyting.

Và rồi chúng ta nói...

{: .definition}

> Hệ lôgic trực giác có thể được xem như một đại số Heyting---các phép toán "và" và "hoặc" là phép nối/phép gặp, các giá trị "Đúng" và "Sai" là các đối tượng lớn nhất và nhỏ nhất, còn phép kéo theo là đối tượng mũ.

### Định nghĩa hình thức cho phạm trù

Chúng ta đã phát biểu định nghĩa trên bằng các phạm trù *mỏng* (thứ tự), nhưng nếu điều chỉnh thuật ngữ, chúng cũng sẽ đúng với tất cả các phạm trù khác.

{: .definition}

> Một phạm trù có tích/đối tích, đối tượng đầu/cuối và một đối tượng mũ là phạm trù bicartesian đóng.

Và rồi

{: .theorem}

> Hệ lôgic trực giác có thể được xem như một phạm trù bicartesian đóng---các phép toán "và" và "hoặc" là tích/đối tích, các giá trị "Đúng" và "Sai" là các đối tượng đầu/cuối, còn phép kéo theo là đối tượng mũ.

Nhân tiện, một dàn cũng có thể tuân theo các luật của *lôgic cổ điển*. Nó phải *bị chặn*, có *tính phân phối*, và ngoài ra phải *có phần bù*, nghĩa là với mỗi mệnh đề $A$, tồn tại một mệnh đề duy nhất $\neg A$ (sao cho $A ∨ \neg A = 1$ và $A ∧ \neg A = 0$). Những dàn này được gọi là *đại số Boolean*.


## Một chút lôgic phạm trù

Ở phần trước, chúng ta đã thấy một số định nghĩa; ở đây, chúng ta sẽ tự thuyết phục rằng chúng thực sự thể hiện đúng khái niệm lôgic bằng cách chứng minh một số kết quả qua lôgic phạm trù.

### A hoặc Đúng là Đúng.

Phép nối (hay cận trên nhỏ nhất) của đối tượng *cao nhất* $\top$ (đóng vai trò giá trị *Đúng*) và bất kỳ đối tượng nào khác bạn có thể nghĩ đến...

![Phép nối của Đúng và X: Ba quả bóng, Đúng, X và phép nối của chúng, với các mũi tên từ Đúng và X đến phép nối](../05_logic/join_true.svg)

...là chính $\top$ (hay một thứ đẳng cấu với nó, mà như đã nói, cũng chính là điều đó). 

![Phép nối của Đúng và X: Ba quả bóng, Đúng, X và phép nối của chúng, với các mũi tên từ Đúng và X đến phép nối, cùng một mũi tên từ phép nối đến Đúng](../05_logic/join_true_answer.svg)

Điều này được suy ra một cách hiển nhiên từ việc phép nối của hai đối tượng phải lớn hơn hoặc bằng cả hai đối tượng, và theo định nghĩa, đối tượng duy nhất lớn hơn hoặc bằng $\top$ là chính $\top$ (vì $\top$, giống mọi đối tượng khác, bằng chính nó).

Sơ đồ này tương ứng với phát biểu lôgic $A \lor \top \cong \top$. Vì vậy, để kiểm tra đã làm đúng hay chưa, chúng ta phải kiểm tra xem phát biểu này có phải mệnh đề hằng đúng (và do đó là định lý) hay không. Quả thực là vậy:

{: .theorem}

> Với bất kỳ đối tượng $A$ nào, A hoặc Đúng là đúng, tức là $A \lor \top = \top$.

**Bài tập 7**: Hãy nghĩ về tình huống đối ngẫu với Sai. Về mặt lôgic, nó suy ra điều gì?

### Nếu A suy ra B, A hoặc B bằng B

Hãy thử một điều khác: lấy hai đối tượng $A$ và $B$ sao cho có một mũi tên giữa chúng, $A \to B$, rồi tìm phép nối của chúng.

![Các đối tượng A, B và phép nối của chúng, với một mũi tên nối A và B cùng hai mũi tên từ A và B đến phép nối](../05_logic/join_bigger.svg)

Khi tìm phép nối của hai đối tượng, chúng ta tìm cận trên *nhỏ nhất*, tức đối tượng *thấp nhất* lớn hơn hoặc bằng cả hai. Vì vậy, mỗi khi có hai đối tượng và một đối tượng cao hơn đối tượng kia, phép nối của chúng sẽ (đẳng cấu với) đối tượng cao hơn.

![Các đối tượng A, B và phép nối của chúng, với một mũi tên nối A và B, hai mũi tên và một mũi tên thứ hai từ phép nối đến B: B đẳng cấu với phép nối.](../05_logic/join_bigger_answer.svg)

Nói cách khác, chúng ta có một định lý mới (cũng có thể được xác nhận bằng bảng chân trị và/hoặc các tiên đề khác).

{: .theorem}

> Với bất kỳ đối tượng $A$ và $B$ nào, nếu $A$ suy ra $B$ ($A \to B$), thì $A$ hoặc $B$ là $B$ ($A \lor B = B$).

Lưu ý rằng đây thực ra là một tổng quát hoá của kết quả trước, phát biểu rằng phép nối giữa một đối tượng bất kỳ và đối tượng $\top$ là chính $\top$ (vì với bất kỳ đối tượng $A$ nào, chúng ta luôn có $A \to \top$).

![Các đối tượng A, Đúng và phép nối của chúng, với một mũi tên nối A và Đúng cùng một mũi tên thứ hai từ phép nối đến Đúng: Đúng đẳng cấu với phép nối.](../05_logic/join_bigger_true.svg)

### Luật đồng nhất

Với ví dụ đầu tiên về suy ra, hãy lấy công thức $A \Rightarrow B$ (lưu ý rằng chúng ta dùng mũi tên kép $\Rightarrow$ để không nhầm $A \Rightarrow B$ (đối tượng) với $A \to B$ (phát biểu rằng $A$ suy ra $B$). Và xét trường hợp $A$ và $B$ là cùng một đối tượng. 

Chúng ta đã nói rằng $A \Rightarrow B$ ($A \Rightarrow A$ trong trường hợp này) là đối tượng cao nhất $X$ thoả mãn tiêu chí của công thức $A ∧ X → B$. Nhưng trong trường hợp này, công thức được thoả mãn với mọi $X$ (vì nó trở thành $(A ∧ A \Rightarrow A) → A$, luôn đúng), tức là đối tượng cao nhất thoả mãn nó là... đối tượng cao nhất hiện có, tức (một đối tượng đẳng cấu với) $True$. 

![Suy ra đồng nhất](../05_logic/implies_identity.svg)

Điều này có hợp lý không? Dĩ nhiên là có: thực ra, chúng ta vừa chứng minh một trong những luật nổi tiếng nhất của lôgic (gọi là luật đồng nhất, theo Aristotle):

{: .theorem}

> Với bất kỳ $A$ nào, $A → A$ luôn đúng, tức mọi thứ suy ra chính nó (mọi thứ được suy ra từ chính nó).

Và điều gì xảy ra nếu $A$ suy ra $B$ trong mọi mô hình, tức là nếu $A \models B$ (hệ quả ngữ nghĩa)? Trong trường hợp này, $A$ sẽ nằm dưới $B$ trong sơ đồ Hasse (chẳng hạn $A$ là quả bóng xanh dương và $B$ là quả bóng cam). Khi đó, tình huống hơi giống trường hợp trước: $A ∧ X → B$ sẽ đúng bất kể $X$ là gì (đơn giản vì riêng $A$ đã suy ra $B$). Và như vậy, $A → B$ một lần nữa sẽ tương ứng với đối tượng $\top$.

![Suy ra khi A được suy ra từ B](../05_logic/implies_b_follows.svg)

Đây cũng là một kết quả nổi tiếng trong lôgic:

{: .theorem}

> (đôi khi được gọi là định lý suy diễn) Nếu $A$ suy ra $B$ trong mọi mô hình, tức ($A \models B$), thì phát biểu $(A \Rightarrow B)$ sẽ luôn đúng.

## Phần xen kẽ: Đại số Heyting tự do - tự xây dựng một hệ lôgic

Khi đã biết tất cả những điều này, làm lôgic thật dễ: trước tiên, chúng ta chọn các mệnh đề cơ sở muốn làm việc với chúng; đó là các phát biểu phụ thuộc vào lĩnh vực của bài toán (hoặc, trong trường hợp này, chỉ là sở thích màu sắc của chúng ta). 

![Lôgic như một thứ tự](../05_logic/algebra_balls.svg)

Sau đó, tuỳ theo loại lôgic đã chọn, trong trường hợp này là lôgic trực giác, chúng ta bắt đầu vẽ các *mệnh đề phức hợp*; chúng ta phải có $A \land B$,  $A \lor B$ với mọi $A$ và $B$.

![Đại số Heyting](../05_logic/heyting_algebra.svg)

(Nhân tiện, chúng ta cũng có thể mô hình hoá đại số Boolean theo cách đại số)

![Đại số Boolean](../05_logic/boolean_algebra.svg)

Khi đó, chúng ta có thể xác định những mệnh đề nào được suy ra từ bất kỳ mệnh đề nào chỉ bằng cách đi theo đường của các mũi tên xuất phát từ nó. 

![Lôgic như một thứ tự](../05_logic/heyting_algebra_path.svg)

Lưu ý rằng chúng ta còn phải vẽ các mệnh đề phức hợp từ những mệnh đề phức hợp, khiến danh sách trở nên vô hạn (vẽ những sơ đồ như vậy rất khó, và tôi chẳng bao giờ hoàn toàn chắc chắn đâu là vị trí đúng cho từng mệnh đề, nên xin hãy báo cho tôi mọi lỗi bạn có thể thấy: tôi có thể gửi bạn một tờ séc 100&#36;, như Donald Knuth, nhưng chỉ khi bạn hứa không lĩnh tiền, vì tôi đang cháy túi).

![Lôgic như một thứ tự](../05_logic/heyting_algebra_full.svg)

Nhìn chung, làm lôgic là như thế --- chúng ta bắt đầu với những điều đã biết, rồi tìm đường dẫn đến những điều muốn chứng minh (hoặc, tuỳ góc nhìn, chúng ta xây dựng chứng minh bằng cách thao tác các chứng minh đã có). 

Điều duy nhất nhìn chung chúng ta không thể làm được (cụ thể là trong lôgic trực giác) là chứng minh rằng một sự kiện cho trước *không thể được đi đến* trên đường của mình, tức là nó không thể được chứng minh từ các tiên đề ("bạn không thể chứng minh một phủ định").

<!--
{% if site.distribution == 'print' %}
-->

## Lời giải

---

**Bài tập 1**: Vẽ sơ đồ cho *hoặc*

Phép toán *hoặc* có thể được biểu diễn bằng một hàm nhận một cặp giá trị Boolean và trả về `True` nếu ít nhất một giá trị là `True`.

| p | q | p ∨ q |
|---|---|-------|
| Đúng | Đúng | Đúng |
| Đúng | Sai | Đúng |
| Sai | Đúng | Đúng |
| Sai | Sai | Sai |

---

**Bài tập 2**: Phép toán *hoặc* sẽ là gì trong diễn giải BHK?

Trong diễn giải BHK, chứng minh của $A ∨ B$ là hợp rời/đối tích/phép gặp quen thuộc --- một cấu trúc chứa một chứng minh của A hoặc một chứng minh của B, cùng thông tin cho biết đó là chứng minh nào.

---

**Bài tập 3**: Xác nhận rằng không thể tồn tại hàm từ bất kỳ tập hợp nào đến tập hợp rỗng.

Với bất kỳ tập hợp không rỗng $A$ nào, không thể có một hàm $f: A → ∅$ vì:
Một hàm phải gán cho mỗi phần tử của $A$ đúng một phần tử của $∅$, nhưng ∅ không có phần tử nào, nên không có gì để gán.

Ngoại lệ duy nhất là khi $A$ cũng rỗng (xem câu hỏi tiếp theo).

---

**Bài tập 4**: Xác nhận rằng tồn tại một hàm từ tập hợp rỗng đến bất kỳ tập hợp nào

Có đúng một hàm từ $∅$ đến bất kỳ tập hợp B nào, gọi là *hàm rỗng*:

Một hàm phải gán cho mỗi phần tử của miền xác định đúng một phần tử của đối miền, nên nếu $∅$ không có phần tử nào, điều kiện này được thoả mãn.

Và chúng ta đã nhắc đến nguyên lý bùng nổ lôgic tương ứng, phát biểu rằng mọi thứ đều được suy ra từ $False$.

---

**Bài tập 5**: Cài một trợ lý chứng minh

Ở đây, bạn phải tự mình làm thôi, xin lỗi nhé :)

---

**Bài tập 6:** Hãy thử chứng minh các hệ lôgic thực sự tạo thành phạm trù, bằng định nghĩa phạm trù đã dùng trong chương trước. 

Chúng ta muốn chứng minh có một phạm trù với các mệnh đề lôgic làm đối tượng và phép kéo theo làm cấu xạ.
Hãy kiểm tra các tiên đề:

- *Đồng nhất* đã được đáp ứng --- như đã nói, với mỗi mệnh đề $A$, ta có $A → A$ 
- *Phép hợp thành* cũng vậy, vì nếu $A → B$ và $B → C$, thì $A → C$; điều này dễ dàng suy ra từ modus ponens (đây có thể là chứng minh đầu tiên của bạn với trợ lý chứng minh).
- *Tính kết hợp* cũng thoả mãn qua $(A → B) → ((B → C) → (A → C))$.

Và nếu muốn coi mọi chứng minh từ $A \to B$ là tương đương, chúng ta thu được một thứ tự; nếu không, thu được một phạm trù thông thường.

---

**Bài tập 7**: Hãy nghĩ về tình huống đối ngẫu với Sai

Tình huống đối ngẫu liên quan đến phép gặp ($∧$) và phần tử đáy $⊥$ (Sai):

$$⊥: A ∧ ⊥ = ⊥$$ 

Nghĩa là, nếu kết hợp bất kỳ phát biểu nào với một phát biểu sai, kết quả sẽ luôn sai; chẳng hạn phát biểu "Cỏ màu xanh *và* lợn biết bay" là sai (và thay phần "Cỏ màu xanh" bằng điều gì khác cũng không thay đổi điều đó).

Điều này dĩ nhiên đối ngẫu với điều đã nhắc đến:

$$A ∨ ⊤ = ⊤$$

<!--
{%endif%}
-->

<!--
The Rieger–Nishimura lattice
---
I forgot to mention that a Heytung algebra that is generated from a given set of axioms is called the Free Heytung algebra of these axioms (just like the free monoids, if you remember those). Above, you saw my (dubious) attempt at drawing the free Heytung algebra of 3 generators, and the result was really messy, but if we attempt to draw the free Heytung algrebra of just 1 generator, then it is actually becomes pretty neat (yes, the free )
-->


<!--
### Proving a negative

If classical logic is based on the belief that everything is either true or false, intuitionistic logic gives precedence to the famous common-sense principle that *you cannot prove a negative*.

which means that while you can given a true statement and follow the arrows to reach other true statements, false statements would remain unreachable.

Given a logical system, consisting of axioms and rules of inference, I define positive statements as statements of the type "X follows from the axioms" and negative statements as statements of type  "X does not follow from the axioms".

Given those definitions, a positive statement is proven by just applying the rules of inference to the axioms until you reach the statement you want to prove, while there is no general way to prove a negative statement.

![Path from truth](../05_logic/paths_truth.svg)


https://personal.math.ubc.ca/~cytryn/teaching/scienceOneF10W11/handouts/OS.proof.4methods.html

https://en.wikibooks.org/wiki/Mathematical_Proof/Methods_of_Proof#Direct_proof

-->
