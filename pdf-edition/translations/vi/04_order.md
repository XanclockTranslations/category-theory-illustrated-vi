---
layout: default
title: Thứ tự
---

# Thứ tự


Với một tập hợp đối tượng cho trước, có thể có rất nhiều tiêu chí để sắp thứ tự chúng (tuỳ vào bản thân các đối tượng) --- kích thước, trọng lượng, tuổi, thứ tự chữ cái, v.v.

Tuy nhiên, lúc này chúng ta không quan tâm đến những *tiêu chí* có thể dùng để sắp thứ tự các đối tượng, mà quan tâm đến *bản chất của những quan hệ* xác định thứ tự. Những quan hệ ấy cũng có thể thuộc nhiều loại.

Về mặt toán học, thứ tự như một cấu trúc được biểu diễn (rất giống monoid) bằng hai thành phần.

{: .definition}

>Thứ tự là một tập hợp phần tử, cùng với một *quan hệ hai ngôi* giữa các phần tử ấy, ký hiệu bằng $≤$ (“lớn hơn hoặc bằng”), tuân theo những quy luật nhất định.

Như thường lệ, chúng ta ký hiệu các phần tử của tập hợp như sau.

![Những quả bóng](../04_order/balls.svg)

Và *quan hệ hai ngôi* là quan hệ giữa hai phần tử, thường được ký hiệu bằng một mũi tên.

![Quan hệ hai ngôi](../04_order/binary_relation.svg)

Còn các quy luật thì khác nhau tuỳ loại thứ tự.
## Thứ tự tuyến tính

Hãy bắt đầu bằng một ví dụ --- loại thứ tự dễ hình dung nhất là *thứ tự tuyến tính*, nghĩa là mỗi đối tượng có vị trí của nó tuỳ theo mọi đối tượng khác. Trong trường hợp này, tiêu chí sắp thứ tự hoàn toàn xác định, không để lại sự mơ hồ nào về việc phần tử nào đứng trước phần tử nào. Chẳng hạn, thứ tự các màu được sắp theo độ dài sóng ánh sáng của chúng (hoặc theo cách chúng xuất hiện trong cầu vồng).

![Thứ tự tuyến tính](../04_order/linear_order.svg)

Dùng lý thuyết tập hợp, ta có thể biểu diễn thứ tự này, cũng như mọi thứ tự khác, bằng một tập hợp các cặp của tập hợp nền của thứ tự với chính nó (một tập hợp con của tập tích).

![Quan hệ hai ngôi dưới dạng một tích](../04_order/binary_relation_product.svg)

Và trong lập trình, thứ tự được định nghĩa bằng cách cung cấp một hàm: khi nhận hai đối tượng, hàm cho biết đối tượng nào “lớn hơn” (đứng trước) và đối tượng nào “nhỏ hơn”. Không khó để thấy hàm này xác định một tập hợp các cặp (chúng ta nhận một cặp và phải nói nó có thuộc tập hợp hay không).

```
[1, 3, 2].sort((a, b) => { 
  if (a > b) {
    return true 
  } else {
    return false
  } 
})
```

Tuy nhiên (đây là lúc mọi thứ trở nên thú vị), không phải mọi hàm như vậy (và không phải mọi tập hợp các cặp) đều xác định thứ tự. Để một hàm như vậy thực sự xác định một thứ tự, nghĩa là luôn cho cùng đầu ra bất kể các đối tượng ban đầu được xáo trộn thế nào, nó phải tuân theo một số quy tắc.

Tình cờ (hay đúng hơn là chẳng hề tình cờ), những quy tắc này gần tương đương với các quy luật toán học xác định tiêu chí của quan hệ thứ tự, nghĩa là các quy tắc xác định phần tử nào có thể trỏ đến phần tử nào.

{: .definition}

>Thứ tự tuyến tính là một tập hợp phần tử, cùng với một *quan hệ hai ngôi* giữa các phần tử ấy, tuân theo các quy luật phản xạ, bắc cầu, phản đối xứng và toàn phần.

Hãy xem chúng là gì.

### Tính phản xạ

Hãy giải quyết quy luật nhàm chán này trước --- mỗi đối tượng phải lớn hơn hoặc bằng chính nó, hay $a ≤ a$ với mọi $a$ (quan hệ giữa các phần tử trong một thứ tự thường được ký hiệu bằng $≤$ trong công thức, nhưng cũng có thể được biểu diễn bằng một mũi tên từ đối tượng thứ nhất đến đối tượng thứ hai).

![Tính phản xạ](../04_order/reflexivity.svg)

Quy luật này chỉ tồn tại để bao quát “trường hợp cơ sở”: ta cũng có thể phát biểu theo cách ngược lại, rằng mỗi đối tượng *không* được có quan hệ ấy với chính nó; khi đó ta sẽ có một quan hệ giống *lớn hơn*, thay vì *lớn hơn hoặc bằng*, và một loại thứ tự hơi khác, đôi khi được gọi là thứ tự *nghiêm ngặt*.

### Tính bắc cầu

Quy luật thứ hai có lẽ là quy luật ít hiển nhiên nhất (nhưng có lẽ cốt yếu nhất) --- nó nói rằng nếu đối tượng $a$ lớn hơn đối tượng $b$, thì nó tự động lớn hơn mọi đối tượng nhỏ hơn $b$, hay $a ≤ b \land b ≤ c \to a ≤ c$.

![Tính bắc cầu](../04_order/transitivity.svg)

Đây là quy luật phần lớn xác định thứ tự là gì: nếu tôi chơi bóng đá giỏi hơn bà tôi, thì tôi cũng sẽ giỏi hơn người bạn của bà mà bà đánh bại; nếu không, tôi thực ra đâu có giỏi hơn bà.

### Tính phản đối xứng

Quy luật thứ ba gọi là tính phản đối xứng. Nó nói rằng hàm xác định thứ tự không được cho kết quả mâu thuẫn (hay nói cách khác, bạn chỉ có $x ≤ y$ và $y ≤ x$ nếu $x = y$).

![Tính phản đối xứng](../04_order/antisymmetry.svg)

Điều này cũng có nghĩa không được phép hoà --- hoặc tôi chơi bóng đá giỏi hơn bà, hoặc bà giỏi hơn tôi.

### Tính toàn phần

Quy luật cuối cùng gọi là *tính toàn phần* (hay *tính liên thông*) và đòi hỏi mọi phần tử thuộc thứ tự đều phải *so sánh được* ($a ≤ b \lor b ≤ a$). Nghĩa là với bất kỳ hai phần tử nào, một phần tử luôn “lớn hơn” phần tử kia.

Nhân tiện, quy luật toàn phần khiến quy luật phản xạ trở nên dư thừa, vì tính phản xạ chỉ là trường hợp riêng của tính toàn phần khi $a$ và $b$ là cùng một đối tượng; nhưng tôi vẫn muốn trình bày nó vì những lý do sẽ sớm rõ ràng.

![Tính liên thông](../04_order/connexity.svg)

Thực ra, lý do là đây: có thể bỏ quy luật toàn phần. Những thứ tự không tuân theo quy luật toàn phần được gọi là *thứ tự bộ phận* (và thứ tự tuyến tính cũng được gọi là *thứ tự toàn phần*).

**Bài tập 1:** Trước đây, chúng ta đã tìm hiểu một quan hệ khá giống quan hệ này. Bạn có nhớ không? Điểm khác biệt là gì?

**Bài tập 2:** Hãy nghĩ đến một vài thứ tự bạn biết và xác định chúng là bộ phận hay toàn phần.

Thứ tự bộ phận thực ra thú vị hơn nhiều so với thứ tự tuyến tính/toàn phần. Nhưng trước khi đi sâu vào chúng, hãy nói đôi điều về các số.

### Thứ tự của các số tự nhiên

Các số tự nhiên tạo thành một thứ tự tuyến tính dưới phép toán *lớn hơn hoặc bằng* (mà ký hiệu của nó chúng ta đã dùng trong các công thức).

![Các số](../04_order/numbers.svg)

Về nhiều phương diện, số tự nhiên là thứ tự tiêu biểu nhất --- mọi thứ tự hữu hạn của các đối tượng đều đẳng cấu với một tập hợp con của thứ tự các số, vì ta có thể ánh xạ phần tử thứ nhất của bất kỳ thứ tự nào đến số $1$, phần tử thứ hai đến số $2$, v.v. (và cũng có thể làm thao tác ngược lại).

Nếu suy nghĩ về điều này, ta thấy đẳng cấu ấy thực ra gần với ý niệm hằng ngày về thứ tự tuyến tính hơn là ý niệm được định nghĩa bằng các quy luật --- khi nghĩ về thứ tự, hầu hết mọi người không nghĩ đến một quan hệ *bắc cầu, phản đối xứng* và *toàn phần*, mà nghĩ đến những tiêu chí giúp họ quyết định đối tượng nào đứng thứ nhất, đối tượng nào đứng thứ hai, v.v. Vì vậy, cần chú ý rằng hai ý niệm này tương đương.

![Các đẳng cấu của thứ tự tuyến tính](../04_order/linear_order_isomorphism.svg)

Từ việc bất kỳ thứ tự hữu hạn nào của các đối tượng đều đẳng cấu với các số tự nhiên, cũng suy ra mọi thứ tự tuyến tính có cùng độ lớn đều đẳng cấu với nhau.

Vậy thứ tự tuyến tính đơn giản, nhưng nó cũng là (và tôi nghĩ đẳng cấu này chứng minh điều đó) thứ tự *nhàm chán* nhất từ trước đến nay, đặc biệt khi nhìn từ góc độ lý thuyết phạm trù --- mọi thứ tự tuyến tính hữu hạn (và hầu hết các thứ tự vô hạn) đều chỉ đẳng cấu với các số tự nhiên, nên mọi sơ đồ của chúng đều có cùng hình dạng.

![Thứ tự tuyến tính (tổng quát)](../04_order/general_linear_order.svg)

Tuy nhiên, thứ tự bộ phận mà chúng ta sẽ xem tiếp không như vậy.

<!--TODO Cantor's theorem -->

## Thứ tự bộ phận

Quy luật toàn phần không có vẻ “bất di bất dịch” như các quy luật còn lại; nghĩa là có lẽ ta có thể nghĩ đến những tình huống nó không áp dụng. Chẳng hạn, nếu muốn sắp thứ tự mọi người theo kỹ năng bóng đá, có nhiều cách để xếp hạng một người so với bạn bè họ, bạn của bạn bè họ, v.v., nhưng không có cách sắp thứ tự những nhóm người chưa từng chơi với nhau.

Bỏ quy luật toàn phần khỏi các quy luật của thứ tự tuyến tính, ta có một *thứ tự bộ phận* (cũng gọi là *tập hợp có thứ tự bộ phận*, hay *poset*).

{: .definition}

>Thứ tự bộ phận là một tập hợp phần tử, cùng với một *quan hệ hai ngôi* giữa các phần tử ấy, tuân theo các quy luật phản xạ, bắc cầu và phản đối xứng.

Mọi thứ tự tuyến tính cũng là thứ tự bộ phận (giống như một nhóm vẫn là một monoid), nhưng chiều ngược lại không đúng.

Thậm chí ta có thể tạo một *thứ tự của các thứ tự* dựa trên thứ tự nào tổng quát hơn.

Thứ tự bộ phận cũng liên quan đến khái niệm *quan hệ tương đương* mà chúng ta đã tìm hiểu ở chương 1, ngoại trừ việc quy luật *đối xứng* được thay bằng *phản đối xứng*.

Nếu xem lại ví dụ về bảng xếp hạng các cầu thủ bóng đá, ta thấy phiên bản đầu tiên chỉ gồm tôi (**m**), bà tôi (**g**) và người bạn của bà (**f**) là một thứ tự tuyến tính.

![Thứ tự tuyến tính của các cầu thủ bóng đá](../04_order/player_order_linear.svg)

Tuy nhiên, thêm người khác này (**o**), người mà chưa ai trong chúng ta từng chơi cùng, sẽ khiến hệ thống thứ bậc không còn tuyến tính, nghĩa là thành thứ tự bộ phận.

![Thứ tự của các cầu thủ bóng đá - phần tử còn lại](../04_order/player_order_leftover.svg)

Đây là điểm khác biệt chính giữa thứ tự bộ phận và toàn phần --- thứ tự bộ phận không thể cho chúng ta câu trả lời xác định cho câu hỏi ai giỏi hơn ai. Nhưng đôi khi đây là điều ta cần --- trong thể thao cũng như các lĩnh vực khác, không phải lúc nào cũng có cách thích hợp để xếp hạng các phần tử theo thứ tự tuyến tính.

### Chuỗi

Trước đây, chúng ta đã nói mọi thứ tự tuyến tính đều có thể được biểu diễn bằng cùng một sơ đồ giống chuỗi; ta có thể đảo phát biểu này và nói rằng mọi sơ đồ trông khác sơ đồ ấy đều biểu diễn thứ tự bộ phận.

Một ví dụ là thứ tự bộ phận chứa một số tập hợp con có thứ tự tuyến tính; chẳng hạn, trong ví dụ bóng đá, ta có thể có những nhóm bạn riêng biệt chơi cùng nhau và được xếp hạng với nhau, nhưng không với ai thuộc nhóm khác.

![Thứ tự bóng đá - hai hệ thống thứ bậc](../04_order/player_order_two.svg)

Những thứ tự tuyến tính khác nhau tạo nên thứ tự bộ phận được gọi là *chuỗi*. Có hai chuỗi trong sơ đồ này: $m \to g \to f$ và $d \to o$.

Các chuỗi trong một thứ tự không nhất thiết phải hoàn toàn tách rời nhau để thứ tự ấy là bộ phận. Chúng có thể được nối với nhau miễn là không phải mọi kết nối đều là *một-một*, nghĩa là phần tử cuối của chuỗi này được nối với phần tử đầu của chuỗi kia (điều này trên thực tế sẽ hợp chúng thành một chuỗi).

![Thứ tự bóng đá - hai hệ thống thứ bậc và một phép nối](../04_order/player_order_two_join.svg)

Tập hợp trên không có thứ tự tuyến tính --- dù biết $d ≤ g$ và $f ≤ g$, chúng ta *không* biết quan hệ giữa $d$ và $f$ --- phần tử nào cũng có thể lớn hơn phần tử kia.

### Đối tượng lớn nhất và nhỏ nhất

Dù thứ tự bộ phận không cho câu trả lời dứt khoát cho “Ai giỏi hơn ai?”, một số vẫn có thể trả lời câu hỏi quan trọng hơn (trong thể thao cũng như các lĩnh vực khác), đó là “Ai đứng số một?”, nghĩa là ai là nhà vô địch, người chơi giỏi hơn tất cả những người khác. Hay tổng quát hơn, phần tử lớn hơn mọi phần tử khác.

> *Phần tử lớn nhất* của một thứ tự là một phần tử $a$ sao cho ta có $x ≤ a$ với bất kỳ phần tử $x$ nào khác,
Một số (không phải tất cả) thứ tự bộ phận có phần tử như vậy --- trong sơ đồ gần nhất, $m$ là phần tử lớn nhất; trong sơ đồ này, phần tử xanh lá là lớn nhất.

![Sơ đồ phép nối với thêm một phần tử](../04_order/join_additional_element.svg)

Đôi khi có nhiều hơn một phần tử lớn hơn mọi phần tử khác; trong trường hợp này, không phần tử nào trong chúng là lớn nhất.

![Một sơ đồ không có phần tử lớn nhất](../04_order/non_maximal_element.svg)

Ngoài phần tử lớn nhất, một thứ tự bộ phận cũng có thể có phần tử bé nhất (nhỏ nhất), được định nghĩa theo cùng cách.

### Phép nối

*Cận trên nhỏ nhất* của hai phần tử được nối với nhau trong một thứ tự gọi là *phép nối* của các phần tử ấy; chẳng hạn, phần tử xanh lá là kết quả phép nối của hai phần tử còn lại.

![Phép nối](../04_order/join.svg)

Phép nối của $a$ và $b$ là phần tử $c$ nhỏ nhất mà lớn hơn chúng; về mặt hình thức:

{: .definition}

> *Phép nối* của các đối tượng $A$ và $B$ là một đối tượng $G$ sao cho:
> 1. Nó lớn hơn cả hai đối tượng ấy, nên $A ≤ G$ và $B ≤ G$.
> 2. Nó nhỏ hơn bất kỳ đối tượng nào khác lớn hơn chúng, nên với bất kỳ đối tượng $P$ nào khác sao cho $P ≤ A$ và $P ≤ B$, ta cũng phải có $G ≤ P$.

![Phép nối với các phần tử khác](../04_order/join_other_elements.svg)

Với bất kỳ hai phần tử nào mà một phần tử lớn hơn phần tử kia (chẳng hạn $a ≤ b$), phép nối là phần tử lớn hơn này (trong trường hợp này là $b$).

![Hai quả bóng được nối với nhau, một quả ở cao hơn quả kia (và là kết quả phép nối của cả hai)](../04_order/join_bigger_element.svg)

Chẳng hạn, trong thứ tự tuyến tính, *phép nối* của hai phần tử bất kỳ chỉ là phần tử lớn hơn.

Cũng như phần tử lớn nhất, nếu hai phần tử có nhiều cận trên cùng lớn như nhau thì không cận nào là *phép nối* (phép nối phải duy nhất).

![Một sơ đồ không có phép nối](../04_order/non_join.svg)

Tuy nhiên, nếu một trong các phần tử ấy được xác định là nhỏ hơn các phần tử còn lại, nó lập tức đáp ứng yêu cầu.

![Một sơ đồ phép nối](../04_order/non_join_fix.svg)

**Bài tập 3:** Phép nối gợi cho bạn nhớ đến khái niệm nào trong lý thuyết phạm trù?

### Phép gặp

Với hai phần tử cho trước, phần tử lớn nhất mà nhỏ hơn cả hai được gọi là *phép gặp* của các phần tử ấy.

![Phép gặp](../04_order/meet.svg)

Các quy tắc như với phép nối cũng áp dụng, nhưng theo chiều ngược lại.

### Sơ đồ Hasse

Những sơ đồ chúng ta dùng trong phần này được gọi là “sơ đồ Hasse” và hoạt động rất giống những sơ đồ thông thường của chúng ta; tuy nhiên, chúng tuân theo thêm một quy tắc --- các phần tử “lớn hơn” luôn được đặt phía trên các phần tử nhỏ hơn.

Xét theo các mũi tên, quy tắc này có nghĩa nếu thêm một mũi tên vào một điểm, điểm mà mũi tên trỏ *đến* luôn phải nằm phía trên điểm mà nó xuất phát *từ*.


Sơ đồ Hasse cho phép chúng ta so sánh hai điểm bất kỳ chỉ bằng cách xem điểm nào nằm trên điểm nào; chẳng hạn, ta có thể xác định *phép nối* của hai phần tử chỉ bằng cách tìm những phần tử chúng nối đến và xem phần tử nào thấp nhất.

![Một sơ đồ phép nối có phép nối hợp lệ](../04_order/hasse.svg)

Tương tự, ta thấy ngay khi hai phần tử không có phép nối.

![Một sơ đồ phép nối](../04_order/hasse_2.svg)

### Thứ tự bộ phận pha màu

Chúng ta đều biết nhiều ví dụ về thứ tự toàn phần (bất kỳ dạng bảng xếp hạng hay thứ hạng nào cũng là thứ tự toàn phần), nhưng có lẽ không dễ nghĩ ngay ra nhiều ví dụ hiển nhiên về thứ tự bộ phận. Vậy hãy xem một vài ví dụ. Điều này sẽ cho chúng ta bối cảnh và giúp hiểu phép nối là gì.

Để giữ đúng phong cách, hãy xem lại monoid pha màu của chúng ta và tạo một *thứ tự bộ phận pha màu*, trong đó mọi màu đều trỏ đến những màu chứa chúng.

![Một poset pha màu](../04_order/color_mixing_poset.svg)

Nếu xem xét nó, bạn sẽ nhận thấy một tính chất thú vị của phép nối.

{: .theorem}

> Trong thứ tự pha màu, phép nối của hai màu bất kỳ là màu mà chúng tạo thành khi pha với nhau.

![Phép nối trong một poset pha màu](../04_order/color_mixing_poset_join.svg)

### Thứ tự bộ phận của các số theo phép chia

Chúng ta đã thấy khi sắp thứ tự các số theo “lớn hơn hoặc bằng”, chúng tạo thành một thứ tự tuyến tính. Nhưng các số cũng có thể tạo thành thứ tự bộ phận; chẳng hạn, chúng tạo thành thứ tự bộ phận nếu sắp theo số nào là ước của số nào, nghĩa là nếu $a$ là ước của $b$ thì $a$ đứng trước $b$; chẳng hạn, vì $2 \times 5 = 10$, $2$ và $5$ đứng trước $10$ (nhưng $3$, chẳng hạn, không đứng trước $10$).

![Poset chia hết](../04_order/divides_poset.svg)

Và tình cờ (thực ra là vì lý do rất chính đáng), phép nối lại tương ứng với một phép toán có ý nghĩa trong bối cảnh của các đối tượng:

{: .theorem}

> Trong thứ tự bộ phận của các số theo phép chia, phép nối của hai số bất kỳ là *bội chung nhỏ nhất* của chúng. Và *phép gặp* của chúng là *ước chung lớn nhất*.

![Poset chia hết](../04_order/divides_poset_meet.svg)

Hãy tìm hiểu kỹ hơn một chút vì sao điều này xảy ra.

### Thứ tự bộ phận bao hàm

Cho một bộ sưu tập các tập hợp chứa một tổ hợp của một tập hợp phần tử cho trước...

![Một poset pha màu](../04_order/color_mixing_poset_inclusion_subsets.svg)

...ta có thể định nghĩa cái gọi là *thứ tự bao hàm* của những tập hợp ấy.

{: .definition}

> *Thứ tự bao hàm* của một bộ sưu tập các tập hợp cho trước (thường là những tập hợp có một số phần tử chung) là thứ tự dựa trên quan hệ hai ngôi sau: $A$ đứng trước $B$ nếu $A$ *chứa* $B$, hay nói cách khác nếu $B$ là *tập hợp con* của $A$.

![Một poset pha màu được sắp thứ tự theo quan hệ bao hàm](../04_order/color_mixing_poset_inclusion.svg)

Điều này có nghĩa là...

{: .theorem}
> Phép *nối* hai tập hợp trong một thứ tự bao hàm là *hợp* của chúng, còn phép *gặp* là *giao* của chúng.

### Định lý biểu diễn của Birkhoff

Sơ đồ này có thể gợi cho bạn nhớ đến điều gì đó --- nếu lấy các màu chứa trong mỗi tập hợp và pha chúng thành một màu, ta sẽ có thứ tự bộ phận pha màu đã thấy trước đó.

![Một poset pha màu được sắp thứ tự theo quan hệ bao hàm](../04_order/color_mixing_poset_blend.svg)

Ví dụ thứ tự theo các ước của số cũng đẳng cấu với một thứ tự bao hàm, cụ thể là thứ tự bao hàm của mọi tập hợp số *nguyên tố* có thể có, kể cả những số lặp lại (hoặc theo cách khác, tập hợp mọi *luỹ thừa nguyên tố*). Điều này được xác nhận bởi định lý cơ bản của số học, phát biểu rằng mỗi số đều có thể viết thành tích các số nguyên tố theo đúng một cách.

![Poset chia hết](../04_order/divides_poset_inclusion.svg)

Đến đây, chúng ta đã thấy hai thứ tự bộ phận khác nhau, một dựa trên pha màu và một dựa trên phép chia các số, có thể được biểu diễn bằng thứ tự bao hàm của mọi tổ hợp tập hợp có thể có từ một số *phần tử cơ bản* (các màu cơ bản trong trường hợp thứ nhất, và các số nguyên tố (hoặc luỹ thừa nguyên tố) trong trường hợp thứ hai). Nhiều thứ tự bộ phận khác cũng có thể được định nghĩa như vậy. Chính xác là những thứ tự nào? Một kết quả tuyệt vời gọi là *định lý biểu diễn của Birkhoff* trả lời câu hỏi ấy. Đó là những thứ tự bộ phận *hữu hạn* đáp ứng hai tiêu chí sau:

1. Mọi phần tử đều có *phép nối* và *phép gặp*.
2. Các phép *gặp* và *nối* ấy *phân phối* đối với nhau; nghĩa là nếu ký hiệu phép nối và phép gặp bằng $∨$ hoặc $∧$ thì $x ∨ (y ∧ z) = (x ∨ y) ∧ (x ∨ z)$.

Các thứ tự bộ phận đáp ứng tiêu chí thứ nhất gọi là *dàn*. Những thứ tự đáp ứng tiêu chí thứ hai gọi là *dàn phân phối*. Hãy ghi lại điều này:

{: .definitions}

> Thứ tự bộ phận trong đó mọi phần tử đều có *phép nối* và *phép gặp* gọi là một *dàn*. Dàn có các phép *gặp* và *nối* *phân phối* đối với nhau gọi là dàn phân phối.

Và các phần tử “nguyên tố” mà chúng ta dùng để xây dựng thứ tự bao hàm là những phần tử không phải *phép nối* của bất kỳ phần tử nào khác. Chúng cũng được gọi là phần tử *bất khả quy đối với phép nối*.

Vậy ta có thể phát biểu định lý như sau:

{: .theorem}

> Mỗi dàn phân phối đều đẳng cấu với một thứ tự bao hàm của các phần tử *bất khả quy đối với phép nối* của nó.

Nhân tiện, các thứ tự bộ phận *không* phải dàn phân phối cũng đẳng cấu với thứ tự bao hàm; chỉ là chúng đẳng cấu với những thứ tự bao hàm *không chứa mọi tổ hợp phần tử có thể có*.

## Dàn

Bây giờ chúng ta sẽ nói thêm về *dàn* (những thứ tự mà định lý Birkhoff áp dụng). Dàn là thứ tự bộ phận trong đó mỗi cặp phần tử đều có *phép nối* và *phép gặp*. Vậy mọi dàn cũng là thứ tự bộ phận, nhưng không phải mọi thứ tự bộ phận đều là dàn (chúng ta sẽ còn thấy thêm những thành viên của hệ thống thứ bậc này).

Hầu hết các thứ tự bộ phận được tạo dựa trên một quy tắc nào đó đều là dàn phân phối; chẳng hạn, các thứ tự bộ phận ở phần trước cũng là dàn phân phối khi được vẽ đầy đủ, như thứ tự pha màu.

![Một dàn pha màu](../04_order/color_mixing_lattice.svg)

Chú ý rằng chúng ta đã thêm quả bóng đen ở trên cùng và quả bóng trắng ở dưới cùng. Chúng ta làm vậy vì nếu không, ba phần tử trên cùng sẽ không có phần tử *nối*, và ba phần tử dưới cùng sẽ không có *phép gặp*.

### Dàn bị chặn

Dàn pha màu của chúng ta có một *phần tử lớn nhất* (quả bóng đen) và một *phần tử nhỏ nhất* (quả bóng trắng). Những dàn có phần tử nhỏ nhất và lớn nhất được gọi là *dàn bị chặn*. Không khó để thấy mọi dàn hữu hạn cũng bị chặn.

**Bài tập 4:** Hãy chứng minh mọi dàn hữu hạn đều bị chặn.

<!--
{% if site.distribution == 'print'%}
-->

## Phần xen kẽ - nửa dàn so với cây


Dàn là thứ tự bộ phận có cả *phép nối* *và* *phép gặp* cho mỗi cặp phần tử. Những thứ tự bộ phận chỉ có *phép nối* (và không có *phép gặp*), hoặc chỉ có *phép gặp* mà không có *phép nối*, được gọi là *nửa dàn*. Cụ thể hơn, những thứ tự bộ phận có *phép gặp* cho mọi cặp phần tử được gọi là *nửa dàn gặp*.

![Nửa dàn](../04_order/semilattice.svg)

Một cấu trúc giống nửa dàn (và có lẽ nổi tiếng hơn nửa dàn) là *cây*.

![Cây](../04_order/tree.svg)

Sự khác biệt giữa hai cấu trúc nhỏ nhưng cốt yếu: trong cây, mỗi phần tử chỉ có thể được nối đến đúng một phần tử khác (dù có thể có nhiều phần tử nối *đến* nó). Nếu biểu diễn cây bằng thứ tự bao hàm, mỗi tập hợp sẽ chỉ “thuộc” một tập hợp chứa nó, trong khi với nửa dàn thì không có hạn chế như vậy.

![So sánh cây và nửa dàn](../04_order/semilattice_tree.svg)

<!-- TODO add a similar diagram for posets and total orders -->

Một trực giác tốt về sự khác biệt giữa hai cấu trúc là nửa dàn có thể biểu diễn những quan hệ tổng quát hơn nhiều; chẳng hạn, quan hệ mẹ-con tạo thành một cây (mẹ có thể có nhiều con, nhưng con *chỉ có một* mẹ), còn quan hệ “anh/chị lớn hơn” tạo thành một dàn, vì một đứa trẻ có thể có nhiều anh chị lớn hơn và ngược lại.

Vì sao tôi nói về cây? Vì mọi người có xu hướng dùng chúng để mô hình hoá đủ loại hiện tượng và hình dung mọi thứ thành cây. Cây là cấu trúc mà tất cả chúng ta đều hiểu, đến với chúng ta một cách tự nhiên, thậm chí không nhận ra mình đang dùng một cấu trúc --- hầu hết những hệ thống thứ bậc do con người tạo ra được mô hình hoá bằng cây. Một tổ chức con người điển hình được mô hình hoá bằng cây: bạn có một người ở trên cùng, vài người báo cáo cho người ấy, rồi nhiều người hơn nữa báo cáo cho vài người này.

![Cây](../04_order/tree-organization.svg)

(Hãy so sánh với các nhóm xã hội không chính thức, trong đó ít nhiều ai cũng được nối với mọi người khác).
 
Và các thành phố (những thành phố được thiết kế thay vì để phát triển tự nhiên) cũng được mô hình hoá bằng cây: có một số khu dân cư, mỗi khu có một trường học, một cửa hàng bách hoá, v.v., được nối với nhau và (trong các thành phố lớn hơn) tổ chức thành những đơn vị dân cư lớn hơn.

Hệ quả của xu hướng dùng cây thay vì dàn để mô hình hoá được xem xét trong tiểu luận mang tính đột phá “A City is Not a Tree” của Christopher Alexander.

> Về sự đơn giản của cấu trúc, cây có thể so với ham muốn ngăn nắp và trật tự mang tính cưỡng bức, đòi hỏi các chân nến trên bệ lò sưởi phải hoàn toàn thẳng hàng và hoàn toàn đối xứng qua tâm. Nửa dàn, ngược lại, là cấu trúc của một tấm vải phức tạp; là cấu trúc của các sinh vật, của những bức tranh và bản giao hưởng vĩ đại.

Nhìn chung, có vẻ các hệ thống thứ bậc được *con người* chủ ý thiết kế, như thành phố, có xu hướng trở thành cây; còn những hệ thống thứ bậc tự nhiên, như hệ thống thứ bậc của các màu, có xu hướng là dàn.

## Phần xen kẽ: Phân tích khái niệm hình thức

Trong phần trước, chúng ta (cùng Christopher Alexander) lập luận rằng những hệ thống thứ bậc dựa trên dàn là “tự nhiên”, nghĩa là xuất hiện trong tự nhiên. Bây giờ, chúng ta sẽ xem một cách thú vị để khám phá những hệ thống như vậy khi có một tập hợp đối tượng cùng có một số thuộc tính. Đây là phần giới thiệu khái quát một phương pháp toán học gọi là *phân tích bối cảnh hình thức*.

Cấu trúc dữ liệu chúng ta sẽ phân tích, gọi là *bối cảnh hình thức*, gồm 3 tập hợp. Thứ nhất là tập hợp chứa mọi *đối tượng* chúng ta sẽ phân tích (ký hiệu bằng $G$).

![Phân tích khái niệm hình thức - hàm](../04_order/concept-objects.svg)

Thứ hai là một tập hợp một số *thuộc tính* mà các đối tượng này có thể có (ký hiệu bằng $M$). Ở đây, chúng ta sẽ dùng 3 màu cơ bản.

![Phân tích khái niệm hình thức - hàm](../04_order/concept-attributes.svg)

Và cuối cùng là một tập hợp quan hệ (gọi là *quan hệ liên thuộc*) thể hiện đối tượng nào có thuộc tính nào, được biểu diễn bằng một tập hợp các cặp $G × M$. Vậy, một cặp chứa một quả bóng và một màu cơ bản (chẳng hạn màu vàng) cho biết màu của quả bóng chứa (nghĩa là được tạo thành từ) màu vàng (cùng các màu khác).

![Phân tích khái niệm hình thức - hàm](../04_order/concept-incidense.svg)

Bây giờ, hãy dùng những tập hợp này để xây dựng một dàn.

Bước đầu tiên: từ tập hợp các cặp, chúng ta xây dựng một hàm nối mỗi thuộc tính với tập hợp các đối tượng cùng có thuộc tính ấy (ta có thể làm vậy vì hàm là quan hệ, và quan hệ được thể hiện bằng các cặp).

![Phân tích khái niệm hình thức - hàm](../04_order/concept-function.svg)

Hãy xem tập đích của hàm này, vốn là một tập hợp các tập hợp. Có cách nào sắp thứ tự các tập hợp ấy để dễ hình dung chúng hơn không? Dĩ nhiên, ta có thể sắp theo quan hệ bao hàm. Theo cách này, mỗi thuộc tính sẽ được nối với một thuộc tính mà một tập hợp đối tượng tương tự cùng có.

Thêm các giá trị trên cùng và dưới cùng, ta có một dàn.

![Phân tích khái niệm hình thức - hàm](../04_order/concept-lattice.svg)

Sắp thứ tự khái niệm thành một dàn có thể giúp ta thấy các kết nối giữa những khái niệm trong bối cảnh; chẳng hạn, ta thấy rằng *mọi quả bóng trong tập hợp của chúng ta có chứa màu vàng đều cũng chứa màu đỏ*.

**Bài tập 5:** Hãy lấy một tập hợp đối tượng và một tập hợp thuộc tính, rồi tạo dàn khái niệm của riêng bạn. Ví dụ: đối tượng có thể là các dạng sống: cá, ếch, chó, rong nước, ngô, v.v.; thuộc tính có thể là các đặc điểm của chúng: “sống dưới nước”, “sống trên cạn”, “có thể di chuyển”, “là thực vật”, “là động vật”, v.v.

<!--
{%endif%}
-->

### Đẳng cấu thứ tự

Chúng ta đã nhắc đến đẳng cấu thứ tự vài lần, nên đã đến lúc nói rõ chúng là gì.

Cho hai tập hợp (chúng ta sẽ dùng thứ tự bộ phận của các số theo phép chia và thứ tự bao hàm của số nguyên tố làm ví dụ), một đẳng cấu giữa chúng gồm hai hàm sau:

1. Một hàm từ thứ tự bao hàm của số nguyên tố đến thứ tự của các số (trong trường hợp này chỉ là *phép nhân* mọi phần tử của tập hợp).
2. Một hàm từ thứ tự của các số đến thứ tự bao hàm của số nguyên tố (đây là phép toán gọi là *phân tích một số ra thừa số nguyên tố*, gồm việc tìm tập hợp các số nguyên tố mà khi nhân với nhau sẽ cho số ấy).

![Một đẳng cấu giữa poset chia hết và thứ tự bao hàm tương ứng](../04_order/divides_poset_isomorphism.svg)

Đẳng cấu thứ tự về bản chất là một đẳng cấu giữa các tập hợp nền của các thứ tự (hàm khả nghịch). Tuy nhiên, ngoài tập hợp nền, thứ tự còn có các mũi tên nối chúng, nên có thêm một điều kiện: để một hàm khả nghịch tạo thành đẳng cấu thứ tự, nó phải *tôn trọng những mũi tên ấy*.

{: .definition}

> Đẳng cấu giữa hai thứ tự là một hàm khả nghịch giữa các tập hợp nền của chúng, sao cho khi áp dụng hàm này (gọi là $F$) cho bất kỳ hai phần tử nào có một thứ tự nhất định trong tập hợp này (gọi là $a$ và $b$), ta phải thu được hai phần tử có thứ tự tương ứng trong tập hợp kia (nghĩa là $a ≤ b$ khi và chỉ khi $F(a) ≤ F(b)$).

Những hàm như vậy được gọi là hàm *bảo toàn thứ tự*.

## Tiền thứ tự

Trong phần trước, chúng ta đã thấy việc bỏ quy luật *toàn phần* khỏi các quy luật của thứ tự (tuyến tính) tạo ra một cấu trúc khác (và phần nào thú vị hơn), gọi là *thứ tự bộ phận*. Bây giờ, hãy xem điều gì sẽ xảy ra nếu bỏ thêm một quy luật nữa, cụ thể là quy luật *phản đối xứng*.

Quy luật phản đối xứng đòi hỏi không được có một đối tượng đồng thời nhỏ hơn và lớn hơn một đối tượng khác. (Hay $a ≤ b ⟺ b ≰ a$).

| | Thứ tự tuyến tính | Thứ tự bộ phận | Tiền thứ tự |
| :--- | :--- | :--- | :--- |
| **Khả năng so sánh phần tử** | $a ≤ b$ hoặc $b ≤ a$ | $a ≤ b$ hoặc $b ≤ a$ hoặc không trường hợp nào | $a ≤ b$ hoặc $b ≤ a$ hoặc không trường hợp nào hoặc cả hai |
| **Tính phản xạ** | X | X | X |
| **Tính bắc cầu** | X | X | X |
| **Tính phản đối xứng** | X | X | - |
| **Tính toàn phần** | X | - | - |

Kết quả là một cấu trúc gọi là *tiền thứ tự*:

{: .definition}

>Tiền thứ tự là một tập hợp phần tử, cùng với một *quan hệ hai ngôi* giữa các phần tử của tập hợp, tuân theo các quy luật phản xạ và bắc cầu.

Tiền thứ tự không hẳn là thứ tự theo nghĩa hằng ngày --- nó có thể có mũi tên đi từ bất kỳ điểm nào đến bất kỳ điểm nào khác: nếu có thể dùng thứ tự bộ phận để mô hình hoá ai chơi bóng đá giỏi hơn ai, thì có thể dùng tiền thứ tự để mô hình hoá ai đã đánh bại ai, trực tiếp (bằng cách thi đấu với họ) hoặc gián tiếp.

![Tiền thứ tự](../04_order/preorder.svg)

Tiền thứ tự chỉ có một quy luật --- *tính bắc cầu* $a ≤ b \land b ≤ c \to a ≤ c$ (ừ thì hai, nếu tính cả *tính phản xạ*). Phần nói về những trận thắng gián tiếp là hệ quả của quy luật này. Nhờ nó, mọi trận thắng gián tiếp (những trận không thắng trực tiếp người chơi, mà thắng người từng đánh bại họ) được thêm vào như hệ quả trực tiếp của việc áp dụng quy luật, như thấy ở đây (chúng ta thể hiện các trận thắng gián tiếp bằng sắc nhạt hơn).

![Tiền thứ tự trong thể thao](../04_order/preorder_sports.svg)

Và do đó, mọi quan hệ “vòng tròn” (chẳng hạn khi một người chơi yếu hơn đánh bại người mạnh hơn) đều chỉ tạo thành một nhóm đối tượng được nối tất cả với nhau.

Tất cả cấu trúc ấy xuất hiện tự nhiên từ quy luật bắc cầu đơn giản.

### Tiền thứ tự và quan hệ tương đương

Có thể xem tiền thứ tự như điểm trung gian giữa *thứ tự bộ phận* và *quan hệ tương đương*, vì chúng thiếu đúng tính chất mà hai cấu trúc kia khác nhau --- tính (phản) đối xứng. Vì vậy, nếu có một nhóm đối tượng trong tiền thứ tự tuân theo quy luật *đối xứng*, những đối tượng ấy tạo thành một quan hệ tương đương. Và nếu tuân theo quy luật ngược lại là *phản đối xứng*, chúng tạo thành một thứ tự bộ phận.

| Quan hệ tương đương | Tiền thứ tự | Thứ tự bộ phận |
| ---          | --- | --- |
| Tính phản xạ | Tính phản xạ | Tính phản xạ |
| Tính bắc cầu | Tính bắc cầu | Tính bắc cầu | 
| Tính đối xứng | - |Tính phản đối xứng |

Cụ thể, bất kỳ tập hợp con các đối tượng nào được nối với nhau theo cả hai chiều (như ví dụ trên) đều tuân theo yêu cầu *đối xứng*. Vậy nếu gom mọi phần tử có kết nối như vậy, ta sẽ được một số tập hợp, mỗi tập hợp xác định một *quan hệ tương đương* khác nhau dựa trên tiền thứ tự, được gọi là *lớp tương đương* của tiền thứ tự.

![Tiền thứ tự](../04_order/preorder_equivalence.svg)

Và thú vị hơn nữa, nếu chuyển những kết nối tiền thứ tự giữa các phần tử của các tập hợp này thành kết nối giữa bản thân các tập hợp, những kết nối ấy sẽ tuân theo yêu cầu *phản đối xứng*, nghĩa là chúng tạo thành một *thứ tự bộ phận*.

![Tiền thứ tự](../04_order/preorder_partial_order.svg)

Tóm lại, với mỗi tiền thứ tự, ta có thể định nghĩa *thứ tự bộ phận của các lớp tương đương của tiền thứ tự ấy*.

<!--
{% if site.distribution == 'print'%}
-->


### Bản đồ như tiền thứ tự

Chúng ta luôn dùng bản đồ để đi lại, thường không nghĩ đến việc chúng thực ra là sơ đồ. Cụ thể hơn, một số bản đồ là tiền thứ tự --- các đối tượng đại diện cho thành phố hoặc giao lộ, và các quan hệ đại diện cho đường sá.

![Một bản đồ như tiền thứ tự](../04_order/preorder_map.svg)

Tính bắc cầu phản ánh việc nếu có một tuyến đường cho phép đi từ điểm $a$ đến điểm $b$ và một tuyến cho phép đi từ $b$ đến $c$, thì bạn cũng có thể đi từ $a$ đến $c$. Đường hai chiều có thể được biểu diễn bằng hai mũi tên tạo thành một đẳng cấu giữa các đối tượng. Những đối tượng mà bạn luôn có thể đi từ đối tượng này sang đối tượng kia tạo thành các lớp tương đương (lý tưởng nhất là mọi giao lộ thuộc cùng một lớp tương đương; nếu không, sẽ có những nơi bạn đến rồi không thể quay về).

![Tiền thứ tự](../04_order/preorder_map_equivalence.svg)

Tuy nhiên, bản đồ có nhiều hơn một đường (và thậm chí nhiều hơn một *tuyến*) nối hai giao lộ không thể được biểu diễn bằng tiền thứ tự. Để làm điều ấy, chúng ta cần phạm trù (đừng lo, chúng ta sẽ đến đó).

### Máy trạng thái như tiền thứ tự

Bây giờ, hãy đổi tiền thứ tự đã dùng trong hai ví dụ trước thành một sơ đồ Hasse đi từ trái sang phải. Giờ đây, nó (hy vọng là) không còn quá giống một hệ thống thứ bậc hay bản đồ, mà giống mô tả của một quá trình (nếu nghĩ kỹ, đây cũng là bản đồ, chỉ là theo thời gian thay vì không gian). Đây thực ra là một cách rất tốt để mô tả mô hình tính toán gọi là *máy trạng thái hữu hạn*.

![Một máy trạng thái như tiền thứ tự](../04_order/preorder_state_machine.svg)

Đặc tả của máy trạng thái hữu hạn gồm một tập hợp các trạng thái mà máy có thể có, như tên gọi gợi ý, tập hợp ấy phải hữu hạn, cùng một số hàm chuyển trạng thái xác định chúng ta chuyển sang trạng thái nào (thường được thể hiện bằng bảng).

Nhưng như chúng ta đã thấy, máy trạng thái hữu hạn giống một tiền thứ tự có đối tượng lớn nhất và nhỏ nhất, trong đó các quan hệ giữa đối tượng được biểu diễn bằng hàm.

Máy trạng thái hữu hạn được dùng trong việc lập kế hoạch tổ chức; chẳng hạn, hãy hình dung một quá trình trong đó một sản phẩm được chế tạo, được người kiểm soát chất lượng kiểm tra; nếu phát hiện thiếu sót, người này chuyển nó đến những bộ phận sửa chữa cần thiết, rồi kiểm tra lại và gửi đi vận chuyển. Quá trình này có thể được mô hình hoá bằng sơ đồ trên.

<!--
{%endif%}
-->

<!--
https://www.cs.rochester.edu/u/nelson/courses/csc_173/fa/fa.html


|Current State | Input | Next State | 
|---   | ---   | ---        |
|| X | X | X |
|Identity| X | X | X |
|Invertibility  | |  | X |
|Closure  | | X | X |

Or imagine a computational algorithm for parsing input which iterates a string of characters and converts them to some other objects until all of the input is parsed.

TODO
Turing machines
https://www.i2cell.science/how-a-turing-machine-works/
---
State machines are, however not Turing-complete, that is, they cannot encode any algorithm.

|Current State | Input | Next State | Write | Move |
|---   | ---   | ---        |
-->

## Tiền thứ tự như phạm trù

Chúng ta đã thấy tiền thứ tự là một khái niệm mạnh, nên hãy xem kỹ hơn quy luật chi phối chúng --- quy luật bắc cầu. Quy luật này cho biết nếu có hai cặp quan hệ $a ≤ b$ và $b ≤ c$, thì ta tự động có quan hệ thứ ba $a ≤ c$.

![Tính bắc cầu](../04_order/transitivity.svg)

Nói cách khác, quy luật bắc cầu cho biết quan hệ $≤$ có thể hợp thành; nghĩa là nếu xem quan hệ “lớn hơn” như một cấu xạ, ta sẽ thấy quy luật bắc cầu thực ra là định nghĩa *phép hợp thành* theo ngôn ngữ phạm trù.

![Tính bắc cầu như phép hợp thành hàm](../04_order/transitivity_composition.svg)

(Chúng ta cũng phải kiểm tra quan hệ ấy có tính kết hợp, nhưng điều đó dễ thôi).


### Định nghĩa hình thức

Vậy chúng ta nghi rằng tiền thứ tự là phạm trù, nhưng có thực sự như vậy không? Hãy xem lại định nghĩa phạm trù.


{: .definition}

> Phạm trù là một bộ sưu tập các *đối tượng* (ta có thể hình dung như những điểm) và *cấu xạ* (mũi tên) đi từ đối tượng này đến đối tượng khác, trong đó:
> 1. Mỗi đối tượng phải có cấu xạ đồng nhất.
> 2. Phải có cách hợp thành hai cấu xạ có chữ ký kiểu thích hợp thành cấu xạ thứ ba theo cách có tính kết hợp.

Có vẻ chúng ta đã đáp ứng quy luật số 2 bằng tính bắc cầu. Còn quy luật đồng nhất thì sao? Chúng ta cũng có nó, dưới tên gọi *tính phản xạ*.

![Tính phản xạ](../04_order/reflexivity.svg)

Vậy điều này đã chính thức --- tiền thứ tự là phạm trù (nghe có vẻ khá hiển nhiên, đặc biệt sau khi chúng ta cũng đã thấy tiền thứ tự có thể quy về tập hợp và hàm bằng thứ tự bao hàm, còn bản thân tập hợp và hàm tạo thành một phạm trù).

Tiền thứ tự là phạm trù, nhưng không phải mọi phạm trù đều là tiền thứ tự. Hầu hết các phạm trù có nhiều cấu xạ khác nhau giữa hai đối tượng cho trước. Chẳng hạn, trong phạm trù tập hợp, có thể có vô số hàm từ, ví dụ, tập hợp số nguyên đến tập hợp giá trị Boolean, cũng như nhiều hàm đi theo chiều ngược lại.

![So sánh thứ tự với các phạm trù khác](../04_order/order_category.svg)

Trong khi đó, giữa hai đối tượng trong tiền thứ tự có *nhiều nhất một cấu xạ*, nghĩa là hoặc ta có $A ≤ B$, hoặc không có.

![So sánh thứ tự với các phạm trù khác](../04_order/arrows_one_arrow.svg)

Vậy, giống như monoid là phạm trù có một đối tượng, thứ tự là phạm trù có nhiều nhất một *cấu xạ* giữa hai đối tượng.

{: .definition}

> Một tiền thứ tự, bất kỳ tiền thứ tự nào, đều có thể xem là một *phạm trù có nhiều nhất một cấu xạ giữa hai đối tượng cho trước*--- với bất kỳ $A$ và $B$ nào, ta nói rằng nếu $A ≤ B$ thì có một cấu xạ $A \to B$. Cấu xạ đồng nhất tồn tại nhờ tính phản xạ.
> Chiều ngược lại cũng đúng: bất kỳ phạm trù nào có không quá một cấu xạ giữa hai đối tượng đều có thể xem là một tiền thứ tự.

Một điều thú vị suy ra từ việc có nhiều nhất một cấu xạ giữa hai đối tượng cho trước là: trong tiền thứ tự, *mọi sơ đồ đều tự động giao hoán*.

**Bài tập 6:** Hãy chứng minh điều này.

### Thứ tự bộ phận và thứ tự toàn phần như phạm trù

Chúng ta đã nói thứ tự bộ phận và thứ tự toàn phần là tiền thứ tự. Điều này có nghĩa chúng cũng là phạm trù.

Cụ thể, tiền thứ tự là những phạm trù được gọi là *phạm trù bộ khung* trong lý thuyết phạm trù --- những phạm trù không có các đối tượng đẳng cấu, nghĩa là mọi đối tượng đẳng cấu đều đồng nhất.

Còn thứ tự toàn phần, tôi đoán chúng ta không có tên “phạm trù” riêng cho chúng, nhưng chúng cũng là một loại phạm trù nhất định.

### Tích và đối tích

Trong khi đang xem lại các sơ đồ ở những chương trước, hãy xem sơ đồ định nghĩa *đối tích* của hai đối tượng trong một phạm trù ở chương 2.
![Phép nối như đối tích](../04_order/coproduct_join.svg)

Nếu còn nhớ, đây là phép toán tương ứng với *quan hệ bao hàm tập hợp* trong phạm trù tập hợp.

![Phép nối như đối tích](../04_order/coproduct_inclusion.svg)

Nhưng khoan, chẳng phải có một phép toán khác cũng tương ứng với quan hệ bao hàm tập hợp sao? Đúng rồi, *phép nối* trong thứ tự. Không chỉ vậy, phép nối trong thứ tự còn được định nghĩa đúng theo cách định nghĩa đối tích phạm trù.

{: .definition}

> Đối tích của $A$ và $B$, ký hiệu $A + B$, là một đối tượng sao cho:
1. Có hai cấu xạ “phép chiếu” $A \to A + B$ và $B \to A + B$.
2. Với bất kỳ đối tích giả mạo $I$ nào cũng có những cấu xạ phép chiếu như vậy ($A \to I$ và $B \to I$), phải có một cấu xạ duy nhất với chữ ký kiểu $g: A + B \to I$, chuyển đối tích thật thành đối tích giả mạo, sao cho các phép chiếu của đối tích giả mạo chỉ là hợp thành của $g$ với các phép chiếu của tích.

![Phép nối như đối tích](../04_order/coproduct_morphisms.svg)

Trong thế giới thứ tự, chúng ta định nghĩa phép nối là:

{: .definition}

> *Phép nối* của các đối tượng $A$ và $B$ là một đối tượng $G$ sao cho:
> 1. Nó lớn hơn cả hai đối tượng ấy, nên $A ≤ G$ và $B ≤ G$.
> 2. Nó nhỏ hơn bất kỳ đối tượng nào khác lớn hơn chúng, nên với bất kỳ đối tượng $P$ nào khác sao cho $P ≤ A$ và $P ≤ B$, ta cũng phải có $G ≤ P$.

Ta có thể thấy hai định nghĩa và các sơ đồ tương ứng về cơ bản giống nhau; chúng ta chỉ thay “lớn hơn” bằng “có một cấu xạ duy nhất” (vì trong thứ tự, mọi cấu xạ đều duy nhất).

Nói theo ngôn ngữ lý thuyết phạm trù, ta có thể phát biểu rằng:

{: .theorem}

> *Đối tích phạm trù* trong *phạm trù các tiền thứ tự* là *phép nối*.

Điều này dĩ nhiên có nghĩa *tích* tương ứng với *phép gặp* (đối ngẫu).

### Phạm trù mỏng

Theo ngôn ngữ lý thuyết phạm trù, các thứ tự (những phạm trù có nhiều nhất một cấu xạ với một chữ ký kiểu cho trước) được gọi là phạm trù “mỏng”.

Phạm trù mỏng thường được dùng để khám phá các khái niệm phạm trù trong một bối cảnh dễ hiểu hơn các phạm trù bình thường (không mỏng). Chẳng hạn, như chúng ta đã thấy, hiểu những khái niệm *thuộc lý thuyết thứ tự* là phép gặp và phép nối sẽ giúp bạn hiểu rõ hơn những khái niệm *phạm trù tổng quát hơn* là tích và đối tích.

Phạm trù mỏng cũng hữu ích trong những bối cảnh chúng ta muốn giữ mọi thứ đơn giản và không đặc biệt quan tâm đến sự khác biệt giữa các cấu xạ đi từ đối tượng này đến đối tượng khác. Chúng ta sẽ thấy một ví dụ trong chương tiếp theo.

<!--
{% if site.distribution == 'print' %}
-->

## Lời giải


---

**Bài tập 1**: Trước đây, chúng ta đã tìm hiểu một quan hệ khá giống quan hệ này. Bạn có nhớ không? Điểm khác biệt là gì?

Đó là *quan hệ tương đương* ở Chương 1.

Cả quan hệ tương đương và thứ tự đều có tính phản xạ và bắc cầu. Điểm khác biệt là:

- Quan hệ tương đương có tính đối xứng (nếu $a = b$ thì bạn luôn có $b = a$).

- Thứ tự có tính *phản đối xứng* (nếu $a \leq b$ thì bạn không thể có $b \leq a$).

Nghĩa là hệ thống thứ bậc đối lập với sự bằng nhau (nhưng chúng cũng khá giống nhau ở một số phương diện).

---

**Bài tập 2:** Hãy nghĩ đến một vài thứ tự bạn biết và xác định chúng là bộ phận hay toàn phần.

**Thứ tự toàn phần:**
- Thứ tự chữ cái
- Thứ tự thời gian

**Thứ tự bộ phận:**
- Tính chia hết của các số nguyên --- một số số là ước của những số khác, nhưng có những số không so sánh được (không số nào là ước của số kia).
- Quan hệ “là tổ tiên của” --- cha mẹ và ông bà bạn đứng trước bạn, con bạn đứng sau bạn, nhưng những người khác không ở bên nào.

---

**Bài tập 3**: Phép nối gợi cho bạn nhớ đến khái niệm nào trong lý thuyết phạm trù?

Phép nối tương ứng với *đối tích* trong lý thuyết phạm trù.

---

**Bài tập 4:** Hãy chứng minh mọi dàn hữu hạn đều bị chặn.

Để chứng minh mọi dàn hữu hạn đều bị chặn, chúng ta phải tìm phần tử trên cùng và dưới cùng của một dàn hữu hạn bất kỳ. Để làm vậy:

1. Lấy tập hợp mọi phần tử trong dàn.
2. Lấy phép nối của chúng.
3. Xong, bạn đã tìm được phần tử trên cùng ($\top$).

Tương tự, phần tử dưới cùng là *phép gặp* của mọi phần tử.

Cách này được vì một dàn phải có phép nối cho mọi tập hợp phần tử (và một số hữu hạn đối tượng có thể được đưa vào một tập hợp).

Chứng minh dựa vào tính hữu hạn; chẳng hạn, bạn không thể lấy tập hợp mọi số nguyên.

---

**Bài tập 5:** Hãy lấy một tập hợp đối tượng và một tập hợp thuộc tính, rồi tạo dàn khái niệm của riêng bạn.

Đây là một ví dụ kinh điển:

**Đối tượng (G)**

{Fish, Frog, Dog, WaterWeed, Corn}

**Thuộc tính (M):**

{LivesInWater, LivesOnLand, CanMove, IsPlant, IsAnimal}

*Quan hệ liên thuộc:*

- Fish: LivesInWater, CanMove, IsAnimal
- Frog: LivesInWater, LivesOnLand, CanMove, IsAnimal  
- Dog: LivesOnLand, CanMove, IsAnimal
- WaterWeed: LivesInWater, IsPlant
- Corn: LivesOnLand, IsPlant

*Các tập hợp thuộc tính:*

- LivesInWater: {Fish, Frog, WaterWeed}
- LivesOnLand: {Frog, Dog, Corn}
- CanMove: {Fish, Frog, Dog}
- IsPlant: {WaterWeed, Corn}
- IsAnimal: {Fish, Frog, Dog}

Bây giờ hãy vẽ dàn!

---

**Bài tập 6:** Hãy chứng minh trong phạm trù mỏng, mọi sơ đồ đều giao hoán.

Chứng minh rất đơn giản:

1. Cho một đường đi theo mũi tên giữa hai đối tượng $A$ và $B$, ta có thể hợp thành những mũi tên ấy để có một mũi tên duy nhất $A \to B$.

2. Theo định nghĩa, chỉ có thể có một mũi tên nối hai đối tượng trong một phạm trù mỏng (chỉ một cấu xạ $A \to B$).

Vậy mọi đường đi nối một cặp đối tượng cho trước đều tương đương với cấu xạ này.

<!--
{%endif%}
-->

