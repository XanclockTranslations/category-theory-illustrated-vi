---
layout: default
title: Biến đổi tự nhiên
---

# Biến đổi tự nhiên 

> Tôi không tạo ra phạm trù để nghiên cứu hàm tử; tôi tạo ra chúng để nghiên cứu biến đổi tự nhiên. --- Saunders Mac Lane

Trong chương này, chúng ta sẽ giới thiệu khái niệm cấu xạ giữa các hàm tử, hay *biến đổi tự nhiên*. Hiểu biến đổi tự nhiên sẽ cho phép chúng ta định nghĩa sự bằng nhau của phạm trù cùng một số khái niệm nâng cao khác.

Biến đổi tự nhiên thực sự nằm ở trái tim của lý thuyết phạm trù, nhưng ban đầu, tầm quan trọng của chúng không hiển nhiên. Vì vậy, trước khi giới thiệu chúng, tôi muốn nói thêm một lần nữa về khối tri thức mà trái tim này nuôi dưỡng (tôi giỏi ẩn dụ mà... về nguyên tắc).

## Các phạm trù tương đương

Phần đầu tiên nhằm giới thiệu biến đổi tự nhiên như một ví dụ tạo động lực để xây dựng cách nói rằng hai phạm trù bằng nhau. Nhưng để làm điều đó, chúng ta cần hiểu các phạm trù bằng nhau là gì và nên là gì.

Vậy bạn đã sẵn sàng nghe về các phạm trù tương đương và biến đổi tự nhiên chưa? Thực ra, theo tôi thì bạn chưa sẵn sàng đâu (không có ý xúc phạm nhé, chúng chỉ rất khó thôi!). Vì thế, chúng ta sẽ đi đường dài hơn. Tôi có thể đặt phần tiếp theo này ở bất kỳ đâu trong sách, và nó vẫn luôn chẳng thuộc hẳn về chỗ nào. Nhưng dù sao, nếu bạn học toán, có lẽ bạn quan tâm đến *bản chất của vũ trụ*. Tôi nghe bạn hỏi: "Đặc điểm cốt yếu của mọi thứ trong thế giới này là gì?"...

### Đối tượng được đánh giá quá cao, hay Heraclitus đã đúng!

> Thế giới là tập hợp các sự kiện, không phải các sự vật. --- Ludwig Wittgenstein

Đặc điểm cốt yếu của mọi thứ trong thế giới này là gì? Khoảng 2500 năm trước, nhà triết học Parmenides đã đưa ra câu trả lời, cho rằng bản chất của vũ trụ là sự trường tồn, tĩnh tại. Theo quan điểm của ông, những gì chúng ta cảm nhận là quá trình/biến đổi/thay đổi chỉ là những biểu hiện hư ảo ("Cái gì có thì có, và cái gì không có thì không thể có"). Ông nói rằng các thứ không bao giờ thực sự thay đổi, chúng chỉ *có vẻ* thay đổi; hoặc (nói theo một cách khác), chỉ biểu hiện thay đổi, còn *bản chất* thì không (tôi nghĩ đây gần như là cách từ "bản chất" ra đời).

Dù còn lâu mới hiển nhiên là đúng, quan điểm của ông dễ khiến mọi người đồng cảm --- các đối tượng ở khắp quanh ta; mọi thứ chúng ta "thấy", dù theo nghĩa đen (trong đời thực) hay nghĩa bóng (trong toán học và các ngành khác), đều có thể được xem như *đối tượng* tồn tại bền vững qua không gian và thời gian. Nếu chấp nhận quan điểm này, chúng ta sẽ nghĩ chìa khoá để hiểu thế giới là hiểu *đối tượng là gì*. Theo tôi, ở một mức độ nào đó, đây là điều lý thuyết tập hợp làm, cũng như lôgic cổ điển (Plato chịu ảnh hưởng của Parmenides khi xây dựng thuyết ý niệm).

Tuy nhiên, có một cách tiếp cận khác cũng thuyết phục không kém đối với câu hỏi về bản chất vũ trụ. Bởi vì, một đối tượng là gì khi được nhìn riêng? Chúng ta có thể nghiên cứu một đối tượng tách biệt không? Và còn gì để nghiên cứu về nó khi nó đã được tách khỏi môi trường? Nếu một đối tượng trải qua quá trình thay toàn bộ các bộ phận, nó vẫn là cùng đối tượng ấy chứ?

Đặt những câu hỏi như vậy có thể khiến chúng ta nghi ngờ rằng, dù những gì chúng ta *thấy* khi nhìn vào vũ trụ là các đối tượng, chính các quá trình/quan hệ/chuyển tiếp, hay *cấu xạ* giữa các đối tượng, mới là chìa khoá thực sự để hiểu nó. Chẳng hạn, khi suy nghĩ kỹ về các đối tượng thường ngày, chúng ta nhận ra mỗi thứ có những *chức năng* cụ thể (hãy lưu ý từ này), thiếu chúng thì một thứ sẽ không còn là chính nó: một chiếc đèn không phát sáng vẫn là đèn chứ? Có thức ăn nào không ăn được không (hay thứ ăn được nào không phải thức ăn)? Điều này càng đúng với các đối tượng toán học: không có những hàm đi giữa chúng thì chúng chẳng còn là đối tượng. 

Vậy thay vì nghĩ về các đối tượng tình cờ có một số cấu xạ giữa chúng, chúng ta có thể lấy quan điểm ngược lại và nói *đối tượng chỉ thú vị với tư cách nguồn và đích của cấu xạ.* 

Dù đã có từ lâu, bắt nguồn từ Heraclitus, người được cho là đối thủ của Parmenides, quan điểm này phần lớn vẫn chưa được khám phá cho đến thế kỷ 20, khi một cuộc cách mạng toán học thực sự diễn ra: Bertrand Russell xây dựng lý thuyết kiểu; học trò của ông, Ludwig Wittgenstein, viết một cuốn sách nhỏ chứa câu trích ở trên; cuốn sách ấy truyền cảm hứng cho một nhóm các nhà toán học và lôgic học được biết đến với tên "Nhóm Vienna". Một thành viên của nhóm là Rudolph Carnap, người đặt ra từ "hàm tử"...

### Tính bất biến qua đẳng cấu

Một hiện thân của quan điểm Heraclitus trong lý thuyết phạm trù là khái niệm *tính bất biến qua đẳng cấu*, mà chúng ta đã ngầm nhắc đến nhiều lần. 

Mọi cấu trúc phạm trù đã tìm hiểu (tích/đối tích, đối tượng đầu/cuối, đối tượng hàm trong lôgic) đều *bất biến qua đẳng cấu*. Hay nói tương đương, chúng định nghĩa một đối tượng *sai khác một đẳng cấu*. 

{: .definition}

> Một tính chất được gọi là bất biến qua đẳng cấu nếu, khi có hai hay nhiều đối tượng đẳng cấu với nhau và một trong số chúng có tính chất ấy, thì những đối tượng còn lại cũng có tính chất ấy. 

Nói ngắn gọn, trong lý thuyết phạm trù, **đẳng cấu = sự bằng nhau**.

Chìa khoá để hiểu lý thuyết phạm trù nằm ở việc hiểu tính bất biến qua đẳng cấu. Và chìa khoá để hiểu tính bất biến qua đẳng cấu là biến đổi tự nhiên.

### Đẳng cấu phạm trù *không* bất biến qua đẳng cấu

Hãy quay lại câu hỏi đã suy nghĩ ở đầu chương trước --- hai phạm trù bằng nhau có nghĩa là gì? 

Trong chương trước, chúng ta đã nói nhiều về sự tuyệt vời của đẳng cấu và tầm quan trọng của nó khi định nghĩa khái niệm sự bằng nhau trong lý thuyết phạm trù, nhưng đồng thời cũng nói rằng *đẳng cấu phạm trù* không thể hiện được khái niệm sự bằng nhau của phạm trù.

![Các phạm trù đẳng cấu](../11_natural_transformations/isomorphic_categories.svg)

Đó là vì (dù ban đầu có vẻ mâu thuẫn) *đẳng cấu phạm trù không bất biến qua đẳng cấu*, tức là những phạm trù chỉ khác nhau ở việc có thêm một số đối tượng đẳng cấu thì bản thân chúng không đẳng cấu.

![Các phạm trù đẳng cấu](../11_natural_transformations/equal_categories.svg)

Vì lý do này, chúng ta cần một khái niệm mới về sự bằng nhau của phạm trù. Một khái niệm làm rõ được *sự khác biệt* giữa những phạm trù có cấu trúc khác nhau, nhưng cũng làm rõ *sự giống nhau* của những phạm trù có cùng cấu trúc phạm trù, bỏ qua các khác biệt không liên quan từ góc nhìn lý thuyết phạm trù. Khái niệm đó là *sự tương đương*.

<!--comic-->
**Parmenides:** Phạm trù này chắc chắn không thể bằng phạm trù kia --- chúng có số đối tượng khác nhau!

**Heraclitus:** Ai quan tâm chứ, anh bạn, chúng đẳng cấu mà.

### Sự tương đương bất biến qua đẳng cấu

Để hiểu rõ hơn các phạm trù tương đương, hãy quay lại hàm tử giữa một bản đồ và khu vực nó biểu diễn (lúc này, chúng ta chỉ xét các phạm trù mỏng, tức tiền thứ tự). Hàm tử này sẽ khả nghịch (và các phạm trù sẽ đẳng cấu) khi bản đồ biểu diễn hoàn toàn khu vực, tức là phải có một mũi tên cho mỗi con đường và một điểm cho mỗi địa điểm nhỏ.

![Các phạm trù đẳng cấu](../11_natural_transformations/isomorphic_map.svg)

Một bản đồ như vậy là cần thiết nếu mục tiêu của bạn là biết mọi *địa điểm*. Tuy nhiên, như đã nói, khi làm việc với lý thuyết phạm trù, chúng ta không quan tâm lắm đến *địa điểm*, mà đến các *tuyến đường* nối chúng; tức là chúng ta tập trung vào *cấu xạ* thay vì *đối tượng*.

Chẳng hạn, nếu các giao lộ được bố trí sao cho có tuyến đường từ giao lộ này đến giao lộ kia và ngược lại, bản đồ có thể gộp chúng thành một giao lộ mà vẫn thể hiện mọi tuyến đường hiện có (các tuyến đường cây sẽ được biểu diễn bằng "tuyến đường đồng nhất"). 

![Các phạm trù tương đương](../11_natural_transformations/equivalent_map.svg)

Hai phạm trù này *không đẳng cấu* --- đi từ một phạm trù sang phạm trù kia rồi quay lại không đưa bạn về cùng một đối tượng. 

Tuy nhiên, đi từ một phạm trù sang phạm trù kia ít nhất sẽ đưa bạn đến một *đối tượng đẳng cấu*. 

![Các phạm trù tương đương](../11_natural_transformations/equivalent_map_equivalence.svg)

Trong trường hợp này, chúng ta nói các tiền thứ tự *tương đương*.

### Định nghĩa sự tương đương bằng đối tượng

Chúng ta biết hai tiền thứ tự đẳng cấu nếu có hai hàm tử sao cho đi từ tiền thứ tự này sang tiền thứ tự kia rồi quay lại đưa bạn về cùng một đối tượng.

Và hai tiền thứ tự tương đương nếu đi từ tiền thứ tự này sang tiền thứ tự kia rồi quay lại đưa bạn về cùng một đối tượng, *hoặc về một đối tượng đẳng cấu với đối tượng ban đầu.* 

![Các tiền thứ tự tương đương](../11_natural_transformations/equivalent_orders.svg)

Nhưng khi nào điều này xảy ra? Để hiểu, chúng ta vẽ các tiền thứ tự thành một sơ đồ Hasse.

![Các tiền thứ tự tương đương](../11_natural_transformations/equivalent_orders_hasse.svg)

Bạn thấy rằng, dù không phải mọi đối tượng đều được nối một-một, *mọi đối tượng ở một mức cho trước đều được nối với các đối tượng ở mức tương ứng*.

Để hình thức hoá ý niệm ấy, chúng ta nhớ lại khái niệm *lớp tương đương* đã tìm hiểu trong chương về thứ tự. Hãy hình dung mối quan hệ giữa các lớp tương đương của hai tiền thứ tự vừa thấy ở trên.

![Các thứ tự có các lớp tương đương đẳng cấu](../11_natural_transformations/equivalent_order_classes.svg)

Bạn thấy chúng đẳng cấu. Và đó không phải tình cờ: 

{: .definition}

> Hai tiền thứ tự tương đương chính xác khi các tiền thứ tự tạo từ các lớp tương đương của chúng đẳng cấu.

Đây là định nghĩa sự tương đương của tiền thứ tự, nhưng đáng tiếc, nó không đúng với mọi phạm trù --- khi làm việc với tiền thứ tự, chúng ta có thể chỉ cần nghĩ về *đối tượng*, nhưng phạm trù đòi hỏi chúng ta nghĩ về cấu xạ; tức là để chứng minh hai phạm trù tương đương, chúng ta phải thiết lập một đẳng cấu giữa các *cấu xạ* của chúng. 

Chẳng hạn, hai phạm trù sau *không* tương đương, dù các lớp tương đương của chúng đẳng cấu --- phạm trù bên trái chỉ có một cấu xạ, còn phạm trù bên phải có hai.

![Các phạm trù không tương đương](../11_natural_transformations/unequal_categories.svg)

Một cách định nghĩa sự tương đương của phạm trù là khái quát hoá khái niệm lớp tương đương của tiền thứ tự thành cái gọi là *khung xương* của phạm trù. Khung xương của một phạm trù là một phạm trù con trong đó mọi đối tượng đẳng cấu với nhau được "gộp" thành một đối tượng (các đối tượng đẳng cấu nhất thiết phải đồng nhất), tức là khung xương của một tiền thứ tự là một thứ tự bộ phận.

Tuy nhiên, chúng ta sẽ để điều này (xin thứ lỗi cho cách nói của tôi) làm *bài tập cho độc giả*. Vì sao? Chúng ta đã làm điều này khi khái quát hoá khái niệm hàm thông thường của lý thuyết tập hợp thành *hàm tử*, nên xây dựng tiếp trên khái niệm ấy hợp lý hơn. Ngoài ra, chúng ta cần một ví dụ tạo động lực để giới thiệu biến đổi tự nhiên, nhớ chứ?

### Định nghĩa sự tương đương bằng cấu xạ

Trong chương về thứ tự, chúng ta đã đưa ra một định nghĩa *đẳng cấu* thứ tự dựa trên *đối tượng*:

{: .definition}

> Một đẳng cấu thứ tự về cơ bản là một đẳng cấu giữa các tập hợp nền của các thứ tự (hàm khả nghịch). Tuy nhiên, ngoài tập hợp nền, thứ tự còn có các mũi tên nối các phần tử, nên có thêm một điều kiện: để một hàm khả nghịch tạo thành đẳng cấu thứ tự, nó phải *tôn trọng các mũi tên ấy*, nói cách khác, phải *bảo toàn thứ tự*. Cụ thể hơn, áp dụng hàm này (hãy gọi là $F$) cho bất kỳ hai phần tử nào trong một tập hợp ($a$ và $b$) phải cho ra hai phần tử có cùng thứ tự tương ứng trong tập hợp kia (tức $a ≤ b$ khi và chỉ khi $F(a) ≤ F(b)$). 

Đó là một cách định nghĩa chúng, nhưng chưa phải cách tốt nhất. Giờ đã biết về hàm tử (như đã nói, đóng vai trò hàm giữa các thứ tự và những phạm trù khác), chúng ta có thể đưa ra một định nghĩa mới, đơn giản hơn, đồng thời đúng với mọi phạm trù chứ không chỉ thứ tự, và với mọi hình thức bằng nhau (đẳng cấu và tương đương).

![Các thứ tự đẳng cấu](../11_natural_transformations/isomorphic_orders.svg)

Chúng ta bắt đầu với định nghĩa **đẳng cấu tập hợp**:

{: .definition}
> Hai **tập hợp** $A$ và $B$ **đẳng cấu** (hay $A ≅ B$) nếu tồn tại hàm $f: A \to B$ và hàm đảo của nó $g: B \to A$, sao cho $f \circ g = ID_{B}$ và $g \circ f = ID_{A}$.

Để điều chỉnh nó sao cho đúng với mọi phạm trù, chỉ cần thay từ "hàm" bằng "hàm tử" và "tập hợp" bằng "phạm trù":

{: .definition}
> Hai **phạm trù** $A$ và $B$ **đẳng cấu** (hay $A \cong B$) nếu tồn tại *hàm tử* $f: A \to B$ và hàm tử đảo của nó $g: B \to A$, sao cho $f \circ g = ID_{B}$ và $g \circ f = ID_{A}$.

**Bài tập 1:** Kiểm tra xem định nghĩa này có đúng không.

Tin hay không tuỳ bạn, định nghĩa này chỉ cách định nghĩa *sự tương đương* đúng một thao tác tìm-và-thay-thế. Chúng ta chỉ cần thay sự bằng nhau bằng đẳng cấu (tức thay $=$ bằng $\cong$). 

{: .definition}

> Hai **phạm trù** $A$ và $B$ **tương đương** (hay $A \simeq B$) nếu tồn tại *hàm tử* $f: A \to B$ và hàm tử đảo của nó $g: B \to A$, sao cho $f \circ g \cong ID_{B}$ và $g \circ f \cong ID_{A}$.

Như đã nói ở đầu, với đẳng cấu, đi qua rồi quay lại đưa chúng ta về cùng một đối tượng, còn với sự tương đương, đối tượng chỉ *đẳng cấu* với đối tượng ban đầu. Thực sự chỉ có vậy thôi. 

Tuy nhiên, chỉ có một vấn đề --- *chúng ta chưa từng nói các hàm tử đẳng cấu có nghĩa là gì*.

## Biến đổi tự nhiên, đẳng cấu tự nhiên và sự tương đương phạm trù

Vậy làm thế nào để định nghĩa trên "sống dậy"? Tiêu đề chương này chỉ ra những thứ cần định nghĩa: 

1. *Cấu xạ giữa các hàm tử* (gọi là *biến đổi tự nhiên*).
2. *Đẳng cấu hàm tử* (gọi là *đẳng cấu tự nhiên*). 
3. Cuối cùng là *sự tương đương phạm trù*.

Nếu điều này nghe có vẻ phức tạp, hãy nhớ rằng chúng ta vẫn làm điều luôn làm --- nói về đẳng cấu. 

Ngay chương đầu tiên của sách, chúng ta đã giới thiệu *đẳng cấu tập hợp*, khá dễ, và giờ đã đến lúc xem xét *đẳng cấu hàm tử*. Vậy chúng ta đang làm cùng một việc. 
<!--comic-->
Dù thực ra...

Nhưng thực ra, biến đổi tự nhiên khá khác với cấu xạ và hàm tử (định nghĩa không "đệ quy" như các định nghĩa hàm tử và cấu xạ). Đó là vì hàm và hàm tử đều là cấu xạ giữa các đối tượng (hay *1-cấu xạ*), còn biến đổi tự nhiên là *cấu xạ giữa các cấu xạ* (được gọi là *2-cấu xạ*).

Nhưng nói vậy đủ rồi, hãy vẽ vài sơ đồ. Chúng ta biết biến đổi tự nhiên là cấu xạ giữa hàm tử, nên hãy vẽ hai hàm tử. 

![Hai hàm tử](../11_natural_transformations/natural_functors_objects.svg)

Các hàm tử có cùng chữ ký. Dĩ nhiên rồi. Nếu không thì làm sao có cấu xạ giữa chúng? 

Một hàm tử gồm hai ánh xạ (ánh xạ đối tượng và ánh xạ cấu xạ), nên một ánh xạ giữa các hàm tử sẽ gồm "ánh xạ của ánh xạ đối tượng" và "ánh xạ của ánh xạ cấu xạ" (đúng thế, tôi thường gặp rắc rối vì cách chọn thuật ngữ của mình, sao bạn lại hỏi?).

### Ánh xạ của ánh xạ đối tượng

Trước hết, hãy nối các ánh xạ đối tượng của hai hàm tử, tạo ra thứ được gọi là "ánh xạ của ánh xạ đối tượng". 

Nó đơn giản hơn vẻ ngoài khi nhận ra chúng ta chỉ cần nối các đối tượng trong *phạm trù đích* của các hàm tử --- các đối tượng trong phạm trù nguồn luôn giống nhau với cả hai hàm tử, vì cả hai đều bao gồm *mọi* đối tượng từ phạm trù nguồn (vì đó là điều hàm tử, và cấu xạ nói chung, làm). Nói cách khác, ánh xạ các thành phần đối tượng của hai hàm tử chẳng qua là chỉ định một loạt cấu xạ trong phạm trù đích: một cấu xạ cho mỗi đối tượng trong phạm trù nguồn; tức là từ mỗi đối tượng trong ảnh của hàm tử thứ nhất phải có một mũi tên xuất phát (đến một đối tượng của hàm tử thứ hai). Chẳng hạn, phạm trù nguồn hiện tại có hai đối tượng và chúng ta chỉ định hai cấu xạ.

![Hai hàm tử và một biến đổi tự nhiên](../11_natural_transformations/natural_transformation.svg)

Lưu ý rằng ánh xạ này không ánh xạ mọi đối tượng trong phạm trù đích, tức là không phải mọi đối tượng đều có mũi tên xuất phát từ chúng (chẳng hạn, ở đây các hình vuông đen và xanh dương không có mũi tên), dù trong một số trường hợp, nó *có thể* như vậy.

**Bài tập 2:** Chính xác khi nào ánh xạ bao gồm mọi đối tượng?

### Ánh xạ của ánh xạ cấu xạ

Phần cấu xạ có vẻ khó... cho đến khi nhận ra rằng một khi các mối nối giữa các ánh xạ đối tượng đã được thiết lập, chỉ có một cách nối các cấu xạ --- chúng ta lấy mỗi cấu xạ của phạm trù nguồn và nối hai cấu xạ do hai hàm tử cho ra trong phạm trù đích. Chỉ có vậy thôi. 

![Hai hàm tử](../11_natural_transformations/natural_functors.svg)

Ồ, thực ra còn có điều kiện sơ đồ trên phải giao hoán (điều kiện tự nhiên), nhưng điều đó gần như tự động xảy ra.

### Điều kiện tự nhiên

Giống mọi thứ khác trong lý thuyết phạm trù, biến đổi tự nhiên có một số luật phải thoả mãn. Trong trường hợp này, có một luật, thường gọi là luật tự nhiên hay điều kiện tự nhiên. 

Trước khi phát biểu luật này, hãy nhắc lại chúng ta đang ở đâu: 

{: .definition}

> Gọi $F$ và $G$ là hai hàm tử có cùng chữ ký kiểu (tức $F : C \to D$ và $G : C \to D$ với một số phạm trù $C$ và $D$). Một biến đổi giữa chúng là một họ cấu xạ trong phạm trù đích $D$ (ký hiệu $\alpha : F \Rightarrow G$), một cấu xạ cho mỗi đối tượng trong $C$, ánh xạ từng đối tượng thuộc đích của hàm tử $F$ (hay ảnh của $F$ trong $D$, như cách gọi khác) đến một số đối tượng trong ảnh của $G$. 

Đây là một *biến đổi*, nhưng chưa nhất thiết là một biến đổi *tự nhiên*.

{: .definition}

> Một biến đổi là tự nhiên khi mỗi cấu xạ $f$ trong $C$ được ánh xạ đến cấu xạ $F(f)$ bởi $F$ và đến $G(f)$ bởi $G$ sao cho ta có $\alpha \circ F(f) = G(f) \circ \alpha$, tức là khi sơ đồ này giao hoán.
>
>![Hình vuông giao hoán của một biến đổi tự nhiên](../11_natural_transformations/natural_transformation_square.svg)

tức là khi bắt đầu từ hình vuông trắng, đi sang phải rồi xuống dưới (qua hình vuông vàng) tương đương với đi xuống dưới rồi sang phải (qua hình vuông đen).

Chúng ta có thể xem một biến đổi tự nhiên như một ánh xạ giữa các cấu xạ và các hình vuông giao hoán: hai hàm tử và một biến đổi tự nhiên giữa hai phạm trù có nghĩa là với mỗi cấu xạ trong phạm trù nguồn của các hàm tử, tồn tại một hình vuông giao hoán trong phạm trù đích.

![Các hình vuông giao hoán của một biến đổi tự nhiên](../11_natural_transformations/natural_transformation_squares.svg)

Khi hiểu hoàn toàn điều này, chúng ta nhận ra các hình vuông giao hoán cũng được tạo từ cấu xạ, nên giống cấu xạ, chúng hợp thành được --- với bất kỳ hai cấu xạ có chữ ký kiểu thích hợp mà chúng ta có thể hợp thành để được cấu xạ thứ ba, ta có hai hình vuông tự nhiên hợp thành theo cùng cách.

![Phép hợp thành các hình vuông giao hoán của một biến đổi tự nhiên](../11_natural_transformations/natural_transformation_squares_composition.svg)

Điều đó có nghĩa là các biến đổi tự nhiên tạo thành một... 

(Ồ khoan, nói điều đó còn quá sớm, phải không?)

### Đẳng cấu tự nhiên 

Nếu một biến đổi tự nhiên chỉ là một họ cấu xạ trong một phạm trù cho trước thoả mãn một số tiêu chí, thì một *đẳng cấu* tự nhiên sẽ là gì? Đúng rồi --- đó là một họ *đẳng cấu* thoả mãn cùng các tiêu chí ấy. 

Sơ đồ giống sơ đồ của biến đổi tự nhiên thông thường, ngoại trừ việc các $\alpha$ không chỉ là cấu xạ thông thường mà là đẳng cấu.

![Hai hàm tử và một biến đổi tự nhiên](../11_natural_transformations/natural_isomorphism.svg)

Việc biến các cấu xạ ấy thành đẳng cấu làm sơ đồ giao hoán theo nhiều hơn một cách; tức là nếu có điều kiện tự nhiên 

$\alpha \circ F(f) = G(f) \circ \alpha$, tức hai đường đi từ **trắng** đến **xanh dương** tương đương.

thì chúng ta cũng có:

$F(f) \circ  \alpha  =   \alpha  \circ G(f)$, tức hai đường đi từ **đen** đến **vàng** cũng tương đương.

### Xây dựng sự tương đương phạm trù

Xin lỗi, lúc nãy chúng ta đang nói về gì nhỉ? À đúng rồi --- sự tương đương phạm trù. Nhớ rằng sự tương đương phạm trù là lý do chúng ta tìm hiểu biến đổi tự nhiên và đẳng cấu chứ? Hay có lẽ ngược lại? Thôi, hãy nhắc lại những gì đã bàn đến lúc này:

1. Đầu phần này, chúng ta đã giới thiệu khái niệm sự tương đương như hai hàm tử, sao cho đi từ phạm trù này sang phạm trù kia rồi quay lại đưa bạn về cùng một đối tượng, hoặc về một *đối tượng đẳng cấu* với đối tượng ban đầu. 

2. Rồi chúng ta bàn rằng, với các phạm trù không mỏng (dày chăng?), tình huống phức tạp hơn đôi chút vì chúng có thể có nhiều hơn một cấu xạ giữa hai đối tượng, nên chúng ta không chỉ phải quan tâm đến các đối tượng đẳng cấu, mà còn đến *các cấu xạ đẳng cấu*. 

Bây giờ, chúng ta sẽ chỉ ra hai ý niệm này được hình thức hoá như thế nào bởi định nghĩa đã trình bày.

{: .definition}

> Hai **phạm trù** $A$ và $B$ **tương đương** (hay $A \simeq B$) nếu tồn tại *hàm tử* $f: A \to B$ và hàm tử đảo của nó $g: B \to A$, sao cho $f \circ g \cong ID_{A}$ và $g \circ f \cong ID_{B}$.

Để hiểu hai điều này liên quan với nhau như thế nào, hãy dựng hàm tử đồng nhất của phạm trù đã dùng làm ví dụ suốt từ đầu. Lưu ý rằng chúng ta vẽ cùng một phạm trù hai lần (thay vì chỉ vẽ một mũi tên từ mỗi đối tượng về chính nó), để sơ đồ dễ đọc hơn.

![Hàm tử đồng nhất](../11_natural_transformations/equivalent_orders_identity.svg)

Sau đó, chúng ta vẽ hợp thành của hai hàm tử thiết lập sự tương đương giữa hai phạm trù, làm nổi bật 3 đối tượng "thú vị", tức những đối tượng khiến các phạm trù không đẳng cấu.

![Hàm tử hợp thành giữa hai hàm tử tạo nên sự tương đương](../11_natural_transformations/equivalent_orders_composite.svg)

Bây giờ, chúng ta tự hỏi trong những trường hợp nào tồn tại một đẳng cấu giữa hai hàm tử ấy?

![Một sơ đồ tương đương](../11_natural_transformations/equivalent_orders_functors.svg)

Câu trả lời trở nên hiển nhiên nếu vẽ các mũi tên đẳng cấu nối ba đối tượng "thú vị" theo cách khác (hãy nhớ phía trên và phía dưới là cùng một phạm trù) --- chúng ta thấy đây chính là những mũi tên cho phép dựng một đẳng cấu giữa hai hàm tử (các mũi tên còn lại chỉ là mũi tên đồng nhất).

![Một sơ đồ tương đương, thể hiện một biến đổi](../11_natural_transformations/equivalent_orders_transformation.svg)

Và khi nào đẳng cấu này bảo toàn cấu trúc phạm trù (sao cho mỗi cấu xạ trong đầu ra của hàm tử hợp thành có một cấu xạ tương đương trong đầu ra của hàm tử đồng nhất)? Chính xác khi đẳng cấu là *tự nhiên*, tức khi mỗi cấu xạ được ánh xạ đến một hình vuông giao hoán; chẳng hạn, đây là hình vuông giao hoán của cấu xạ được đánh dấu màu đỏ.

![ Một sơ đồ tương đương, thể hiện một biến đổi tự nhiên](../11_natural_transformations/equivalent_orders_natural_transformation.svg)

tức là điều kiện tự nhiên đảm bảo các cấu xạ trong đích của hàm tử hành xử cùng cách như các cấu xạ tương ứng trong nguồn.

Như vậy, chúng ta đã xong với sự tương đương phạm trù, nhưng chưa xong với biến đổi tự nhiên --- biến đổi tự nhiên là một khái niệm rất tổng quát, còn sự tương đương phạm trù chỉ là một trường hợp rất hẹp của nó.

## Biến đổi tự nhiên trong lập trình. Biến đổi tự nhiên trên hàm tử danh sách

Trong cuốn sách này, chúng ta đã biết lập trình/khoa học máy tính là việc nghiên cứu phạm trù các kiểu trong ngôn ngữ lập trình. Tuy nhiên (để điều này không quá hiển nhiên), trong ngữ cảnh khoa học máy tính, chúng ta dùng các thuật ngữ khác cho những khái niệm lý thuyết phạm trù chuẩn. 

Chúng ta đã biết các đối tượng được gọi là *kiểu*, tích và đối tích lần lượt là các kiểu *đối tượng/bộ* và kiểu *tổng*. Và trong chương trước, chúng ta đã biết hàm tử được gọi là *kiểu tổng quát*. Giờ là lúc tìm hiểu biến đổi tự nhiên là gì trong ngữ cảnh này. Chúng được gọi là *hàm đa hình (theo tham số)*.

### Trở lại với hàm tử có điểm

Giả sử điều này nghe hơi mơ hồ. Giá mà có ví dụ nào về biến đổi tự nhiên trong lập trình để dùng... Nhưng khoan, chúng ta đã chỉ ra một biến đổi tự nhiên trong chương trước, khi nói về hàm tử có điểm. 

Đúng thế, một hàm tử có điểm khi có một biến đổi tự nhiên giữa nó và hàm tử đồng nhất, tức là có một mũi tên xanh lá cho mỗi đối tượng/kiểu.

![Hàm tử có điểm](../11_natural_transformations/pointed_functor.svg)

Và đây rõ ràng là một biến đổi tự nhiên. Thực ra, nếu đi vào chi tiết, chúng ta sẽ thấy nó rất giống sơ đồ tương đương trước đó --- cả hai biến đổi đều liên quan đến hàm tử đồng nhất, và cả hai đều có cùng một phạm trù làm nguồn và đích, nên chúng ta có thể đặt mọi thứ trong một vòng tròn (chúng ta không làm vậy trong sơ đồ tương đương, nhưng đó chỉ là vấn đề trình bày). 

Thực ra, khác biệt duy nhất giữa hai biến đổi là một sự tương đương được định nghĩa bằng một *đẳng cấu tự nhiên* từ một hàm tử cho trước đến hàm tử đồng nhất ( $ID \cong f \circ g $ và $ID \cong g \circ f$), còn một hàm tử có điểm được định nghĩa bằng một *biến đổi tự nhiên* một chiều từ hàm tử đồng nhất ($ID \to f $), tức là hàm tử tương đương có điểm, nhưng chiều ngược lại thì không). 

### Hàm đa hình như biến đổi tự nhiên 

Chúng ta đã nói rằng một biến đổi tự nhiên tương đương với một hàm đa hình (theo tham số) trong lập trình. Nhưng khoan, biến đổi tự nhiên chẳng phải là một thứ khác (và phức tạp hơn nhiều) sao:

{: .definition}

> Hai hàm tử $F$ và $G$ có cùng chữ ký kiểu (tức $F : C \to D$ và $G : C \to D$ với một số phạm trù $C$ và $D$), cùng một họ cấu xạ trong phạm trù đích $D$ (ký hiệu $\alpha : F \Rightarrow G$), một cấu xạ cho mỗi đối tượng trong $C$. Những cấu xạ ánh xạ mỗi đối tượng thuộc đích của $F$ (hay ảnh của $F$ trong $D$, như cách gọi khác) đến một đối tượng thuộc đích của $G$. 

Quả thực là vậy (tôi không nói dối bạn đâu, nếu bạn đang tự hỏi), nhưng trong trường hợp lập trình, phạm trù nguồn và đích của cả hai hàm tử đều là cùng một phạm trù ($Set$), nên có thể bỏ toàn bộ điều kiện về chữ ký kiểu của các hàm tử. 

{: .definition}

> Hai ~~hàm tử~~ kiểu tổng quát $F$ và $G$ ~~có cùng chữ ký kiểu~~ cùng một họ cấu xạ trong $Set$ (ký hiệu $\alpha : Set \Rightarrow Set$), một cấu xạ cho mỗi đối tượng trong $Set$, ánh xạ mỗi đối tượng đích của hàm tử $F$ (hay ảnh của $F$ trong $D$, như cách gọi khác) đến một số đối tượng đích của hàm tử $G$. 

Như đã biết từ chương trước, một hàm tử trong lập trình là một kiểu tổng quát (phải có hàm `map` với chữ ký thích hợp). 

Và "một họ cấu xạ trong $Set$, một cấu xạ cho mỗi đối tượng trong $Set$" là gì? Các cấu xạ trong phạm trù $Set$ là hàm, nên đó chỉ là một loạt hàm, một hàm cho mỗi kiểu. Trong Haskell/System F, nếu ký hiệu một kiểu bất kỳ bằng chữ $$a$$), thì đó là $alpha : \forall a. F a \to G a$. Nhưng đây chính là các hàm đa hình. 

Đây là cách viết định nghĩa trên bằng một ngôn ngữ truyền thống hơn (chúng ta dùng chữ hoa `<A>` thay vì $a$, như thông lệ.

```typescript
function alpha<A>(a: F<A>) : G<A> {
}

```

Kiểu tổng quát hoạt động bằng cách thay `<A>` bằng một kiểu cụ thể nào đó, như `string`, `int`, v.v. Cụ thể, biến đổi tự nhiên từ hàm tử đồng nhất đến hàm tử danh sách, đặt mỗi giá trị vào một danh sách đơn phần tử, có dạng $alpha :: \forall\ a. a \to List\ a$. Hay trong TypeScript:

```typescript

function array<A>(a: A) : Array<A> {
    return [a]
}
```

Một số ví dụ về biến đổi tự nhiên
---

Khi thoát khỏi cảm giác bối rối mà quá nhiều thuật ngữ và khái niệm mới gây ra (nhân tiện, việc này có thể mất nhiều năm), chúng ta nhận ra rằng dĩ nhiên có nhiều hàm đa hình/biến đổi tự nhiên được các lập trình viên dùng.

Chẳng hạn, trong chương trước, chúng ta đã bàn về một biến đổi tự nhiên/hàm đa hình: hàm $\forall a.a \to [a]$ đặt mỗi giá trị vào một danh sách đơn phần tử. Hàm này là một biến đổi tự nhiên giữa hàm tử đồng nhất và hàm tử danh sách. 

![Biến đổi tự nhiên định nghĩa một hàm tử có điểm trong Set](../11_natural_transformations/pointed_functor_set_transformation.svg)

Đây gần như là hàm duy nhất hữu ích với chữ ký *này* (những hàm khác là $a \to [a, a]$, $a \to [a, a, a]$, v.v.), nhưng có nhiều ví dụ với chữ ký $list\ a \to list\ a$, như hàm *đảo ngược* một danh sách.

![Biến đổi tự nhiên đảo ngược một danh sách trong Set](../11_natural_transformations/reverse_set_transformation.svg)

...hay *take1*, lấy phần tử đầu tiên của một danh sách
 
![Biến đổi tự nhiên lấy phần tử đầu tiên của một danh sách trong Set](../11_natural_transformations/take_set_transformation.svg)

hay *flatten*, làm phẳng một danh sách các danh sách thành một danh sách thông thường (chữ ký của hàm này hơi khác, là $list\ list\ a \to list\ a$).

![Biến đổi tự nhiên làm phẳng một danh sách trong Set](../11_natural_transformations/flatten_set_transformation.svg)

---

**Bài tập 3:** Vẽ các hình vuông tự nhiên minh hoạ cho biến đổi tự nhiên $reverse$.

![Biến đổi tự nhiên đảo ngược một danh sách trong Set](../11_natural_transformations/reverse_set_transformation_task.svg)
Làm tương tự với các biến đổi còn lại.

---

### Điều kiện tự nhiên 

Trước đó, chúng ta đã nói không nên quá lo về tính tự nhiên vì nó luôn được thoả mãn. Tuy nhiên, xét về thống kê, điều này không đúng --- theo tôi, khoảng 99.999 phần trăm các biến đổi không thực sự tự nhiên (không biết bạn có thể tính tỷ lệ ấy cho đúng không?). Nhưng đồng thời, tình cờ là (cụm từ tôi thích nhất khi viết về toán học) mọi biến đổi mà chúng ta quan tâm *đều* tự nhiên. 

Vậy điều kiện tự nhiên đòi hỏi gì trong lập trình? Để hiểu, chúng ta dựng một số hình vuông tự nhiên của những biến đổi đã trình bày.

Chúng ta chọn hai kiểu đóng vai trò $a$, trong trường hợp này là $string$ và $num$, cùng một biến đổi tự nhiên, chẳng hạn biến đổi giữa hàm tử đồng nhất và hàm tử danh sách.

![Hàm tử có điểm trong Set](../11_natural_transformations/pointed_functor_set.svg)

Sơ đồ giao hoán khi, với mọi hàm $f$, áp dụng $Ff$, tức phiên bản được ánh xạ/nâng của $f$ bằng một hàm tử (trong trường hợp này chỉ là $F f : string \to num$ vì đó là hàm tử đồng nhất), rồi áp dụng ($alpha :: F b \to G\ b$), tương đương với áp dụng ($alpha:: F a \to G\ a$), rồi phiên bản được ánh xạ của $f$ bằng hàm tử kia (trong trường hợp này là $G f :: List\ a \to List\ b$), tức là 

$$\alpha \circ F\ f \cong G\ f \circ \alpha$$

(trong thế giới lập trình, bạn còn có thể gặp dạng như $\alpha (map\ f x) = map\ f (\alpha x)$, nhưng lưu ý rằng ở đây, hàm $map$ mang hai nghĩa khác nhau ở hai vế; Haskell đủ thông minh để suy ra cần dùng $fmap$ nào).

Và trong TypeScript, khi nói riêng về hàm tử đồng nhất và hàm tử danh sách, sự bằng nhau được biểu diễn như sau:

```
[x].map(f) == [f(x)]
```

Vậy phương trình này có đúng trong trường hợp của chúng ta không? Để xác nhận, chúng ta nhìn vào thế giới giá trị thêm một lần cuối.

Chúng ta lấy một $f$, tức một hàm tác động lên các giá trị đơn giản (không phải danh sách), chẳng hạn hàm $length : string \to num$ trả về số ký tự trong một chuỗi, rồi chuyển nó (hay *nâng* nó, theo thuật ngữ thường dùng) thành một hàm tác động lên các giá trị phức tạp hơn bằng hàm tử danh sách (và hàm bậc cao $map$).

![Một hàm được nâng](../11_natural_transformations/lifted_function_f.svg)

Sau đó, chúng ta lấy kiểu đầu vào và đầu ra của hàm này (trong trường hợp này là $string$ và $num$), cùng hai cấu xạ của một biến đổi tự nhiên (chẳng hạn hàm trừu tượng $\forall a.a \to [a]$) tương ứng với hai kiểu ấy.

![Hàm tử có điểm trong Set](../11_natural_transformations/pointed_functor_set_transformations.svg)

Khi hợp thành hai cặp cấu xạ này, chúng ta thấy chúng quả thực giao hoán --- thu được hai cấu xạ thực ra là cùng một hàm.

![Hàm tử có điểm trong Set](../11_natural_transformations/pointed_functor_set_internal.svg)

Hình vuông trên thể hiện biến đổi $\forall a.a \to [a]$ (giữa hàm tử đồng nhất và hàm tử danh sách); đây là một biến đổi khác, lần này giữa hàm tử danh sách và chính nó ($\forall a.[a] \to [a]$) --- $reverse$ 

![Hàm tử có điểm trong Set](../11_natural_transformations/reverse_set_internal.svg)

(và bạn thấy điều này đúng không chỉ với $length$, mà với bất kỳ hàm nào khác).

Vậy vì sao điều này xảy ra? Vì sao những biến đổi cụ thể này tạo thành một hình vuông giao hoán với từng cấu xạ?

Câu trả lời đơn giản, ít nhất trong trường hợp cụ thể này: hàm ban đầu chưa được nâng $f :: a \to b$ (như $length :: string \to num$ của chúng ta) chỉ có thể làm việc với các giá trị riêng lẻ (không phải cấu trúc), còn các hàm biến đổi tự nhiên, tức các hàm có chữ ký $list :: a \to list\ a$, chỉ thay đổi cấu trúc chứ không thay đổi giá trị riêng lẻ. Điều kiện tự nhiên chỉ nói rằng chúng ta có thể áp dụng hai loại hàm này theo bất kỳ thứ tự nào muốn mà không đổi kết quả cuối cùng.

Điều này có nghĩa là, nếu có một dãy biến đổi tự nhiên muốn áp dụng (như $reverse$, $take$, $flatten$, v.v.) và một số hàm được nâng ($F f$, $F g$), bạn có thể đan xen hai dãy theo bất kỳ cách nào và vẫn thu được cùng kết quả, chẳng hạn 

$$take1 \circ reverse \circ F\ f \circ F\ g$$

giống với 

$$take1 \circ F\ f \circ reverse \circ F\ g$$

...hay...

$$ F\ f \circ F\ g \circ take1 \circ reverse$$

...hay bất kỳ dãy nào khác như vậy (điều duy nhất không được phép là đảo thứ tự các phần tử trong hai dãy --- ($take1 \circ reverse$ dĩ nhiên khác với $reverse \circ take1$, và nếu có $F\ f \circ F\ g$, thì $F\ g \circ F\ f$ hoàn toàn không được phép vì chữ ký kiểu khác nhau).

**Bài tập 4:** Chứng minh các kết quả trên bằng công thức của điều kiện tự nhiên.

### Các biến đổi không tự nhiên

Các biến đổi "phi tự nhiên" hay "không tự nhiên" (hãy gọi đơn giản là *biến đổi*) được nhắc đến hiếm đến mức chúng ta có thể muốn hỏi liệu chúng có tồn tại không. Câu trả lời là "có và không". Vì sao có? Một mặt, các biến đổi gồm vô số cấu xạ, tạo thành một lượng hình vuông còn khó đếm hơn nữa, và hiển nhiên không có gì ngăn một số hình vuông này không giao hoán. 

Chẳng hạn, nếu thay một cấu xạ trong họ cấu xạ tạo nên biến đổi tự nhiên bằng một cấu xạ ngẫu nhiên khác có cùng chữ ký, mọi hình vuông có cấu xạ này làm thành phần sẽ ngừng giao hoán.

![Biến đổi không tự nhiên](../11_natural_transformations/unnatural_transformation_squares.svg)

Điều này sẽ tạo ra một thứ như biến đổi "gần tự nhiên" (chẳng hạn một hàm trừu tượng đảo ngược mọi danh sách, ngoại trừ danh sách số nguyên).

Và trong phạm trù các tập hợp, nơi cấu xạ là hàm, tức ánh xạ giữa các giá trị, chỉ cần chuyển một mũi tên của đúng một trong các giá trị ấy cũng đủ làm biến đổi trở nên "không tự nhiên" (chẳng hạn một hàm đảo ngược mọi danh sách, trừ một danh sách cụ thể).

![Biến đổi không tự nhiên trong tập hợp --- giống reverse, nhưng một mũi tên bị lệch](../11_natural_transformations/reverse_set_unnatural.svg)

Cuối cùng, nếu chỉ gom một loạt cấu xạ ngẫu nhiên đáp ứng các tiêu chí, một cấu xạ cho mỗi đối tượng, chúng ta thu được thứ tôi sẽ gọi là "biến đổi hoàn toàn không tự nhiên" (nhưng đó là thuật ngữ của tôi).

Tuy nhiên, dù chúng có tồn tại, định nghĩa các biến đổi không tự nhiên rất khó. Chẳng hạn, với các phạm trù *vô hạn*, không có cách đặc tả một "biến đổi hoàn toàn không tự nhiên" như vậy (không có hình vuông nào giao hoán) mà không dùng đến tính ngẫu nhiên. Ngay cả các biến đổi trên phạm trù hữu hạn, hay các biến đổi "bán tự nhiên" mô tả ở trên (gồm một điều kiện riêng cho một giá trị hay kiểu), cũng không thể được đặc tả trong một số ngôn ngữ. Chẳng hạn, bạn có thể định nghĩa một biến đổi như vậy trong Typescript, nhưng không thể trong Haskell.

Để hiểu vì sao, hãy xem kiểu của một biến đổi tự nhiên.

$$\forall\ a.\ F a \to G a$$

Điểm mấu chốt là định nghĩa phải đúng *với mọi* kiểu a. Vì lý do này, chúng ta không có cách chỉ định các mũi tên khác nhau cho các kiểu khác nhau mà không dùng đến ép kiểu xuống, điều không được phép trong những ngôn ngữ như Haskell (vì nó phá vỡ nguyên lý tính tham số).

<!--
{% if site.distribution != 'print' %}
-->

### Phần xen kẽ: Biến Skolem và tham số hoá

Hãy thử định nghĩa biến đổi "bán tự nhiên" đã mô tả ở trên (gồm một điều kiện riêng cho một giá trị hay kiểu), chẳng hạn một hàm trừu tượng đảo ngược mọi danh sách, ngoại trừ danh sách Boolean). Trong Typescript, nó sẽ trông gần như thế này.

```typescript
function unnatural<A> (a: Array<A>): Array <A>{
        return a
    } else {
        return a.reverse()
    }
}
```

<!--comic-->
(Nhìn đoạn mã này xem! Nó có vẻ "không tự nhiên" phải không?)

Cách này sẽ hoạt động, nhưng nếu thử làm điều tương tự trong Haskell, chẳng hạn, ngôn ngữ sẽ lập tức nói rằng bạn không thể ("`a` là một "biến kiểu cứng" (còn gọi là "biến Skolem" trong ngữ cảnh khác)). Vì sao vậy? Có một số *lý do kỹ thuật*: kiểm tra kiểu lúc chạy như thế này gây thêm chi phí hiệu năng, vì đòi hỏi môi trường chạy phải giữ thông tin kiểu cho từng giá trị sau khi biên dịch. Nhưng cũng có một *lý do triết học* mạnh mẽ: một hàm tổng quát phải hoạt động theo cách tổng quát. Tính tổng quát của một hàm kiểm tra kiểu của giá trị lúc chạy (và hành xử khác nhau với các kiểu khác nhau), tốt nhất cũng chỉ đáng ngờ. 

Một hàm như vậy giống việc (nếu chuyển sang nhánh lôgic của đẳng cấu Curry-Howard) chứng minh một phát biểu tổng quát dạng "Mọi $a$ đều có một tính chất cho trước" chỉ bằng cách chỉ ra rằng các $a$ hiện đang tồn tại tình cờ có tính chất ấy. Chắc chắn, dù có thể đúng trong một số ngữ cảnh, các chứng minh như vậy rất hạn chế cả về phạm vi lẫn thông tin mang lại. Chẳng hạn, khẳng định mọi người đang ngồi ở bàn cạnh bạn đều có tóc nâu không cho biết điều gì đáng kể, trừ khi có một lý do sâu hơn khiến nó đúng.

Nói cách khác, các biến đổi không tự nhiên sẽ không hoạt động trong Haskell, đơn giản vì chúng... không tự nhiên, tức là không tuân theo các luật.

Nhân tiện, trong lập trình, nguyên lý này được gọi là "tính tham số", và các hàm trừu tượng tự nhiên được gọi là "đa hình theo tham số", còn các hàm đa hình không tự nhiên được gọi là đa hình ad hoc.

<!--
{%endif%}
-->

## Trở lại với biến đổi tự nhiên

Giờ, sau khi đã thấy định nghĩa biến đổi tự nhiên, đã đến lúc xem định nghĩa biến đổi tự nhiên (và nếu bạn cảm thấy chất lượng hài hước trong sách đang giảm đi, đó chỉ là vì *mọi thứ đang trở nên nghiêm túc*).

Hãy xem lại sơ đồ giao hoán biểu diễn một biến đổi tự nhiên.

![Hai hàm tử](../11_natural_transformations/natural_functors.svg)

Sơ đồ này có thể khiến chúng ta xem biến đổi tự nhiên như một loại "hàm tử hai mũi tên", có hai mũi tên thay vì một xuất phát từ mỗi cấu xạ --- ý niệm này có thể được hình thức hoá bằng *phạm trù tích*. 

Ồ khoan, tôi vừa nhận ra chúng ta chưa tìm hiểu phạm trù tích... nhưng đừng lo, chúng ta sẽ tìm hiểu ngay.

### Nhóm tích và phạm trù tích

Chúng ta chưa tìm hiểu phạm trù tích, nhưng vài trang trước, khi tìm hiểu monoid và nhóm, chúng ta đã nói về khái niệm *nhóm tích*. Tin tốt là *phạm trù* tích là một khái quát hoá của *nhóm* tích...

Tin xấu là có lẽ bạn không nhớ nhiều về nhóm tích, vì chúng ta chỉ nói sơ qua. 

Nhưng đừng lo, bây giờ chúng ta sẽ tìm hiểu sâu hơn:

### Nhóm tích

Với hai nhóm $G$ và $H$, mà các tập hợp phần tử cũng có thể được ký hiệu là $G$ và $H$... 

![Nhóm Klein bốn phần tử như một nhóm tích](../11_natural_transformations/groups_product.svg)

(trong ví dụ này, chúng ta dùng hai nhóm Boolean, được hình dung như các nhóm phép quay ngang và dọc của một hình vuông)

...*nhóm tích* của hai nhóm này là một nhóm có tập hợp phần tử là tích Descartes của hai tập hợp ấy, $G \times H$.

![Nhóm Klein bốn phần tử như một nhóm tích](../11_natural_transformations/klein_four_underlying_set.svg)

Vậy phép toán nhóm của một nhóm như thế có thể là gì? Tôi sẽ nói rằng, trong số ít phép toán nhóm khả dĩ cho tập hợp này *tồn tại*, đây là phép toán *duy nhất* *tự nhiên* (tôi không định đưa biến đổi tự nhiên vào phần này, nhưng chúng thực sự xuất hiện ở khắp nơi). Vậy hãy thử suy ra phép toán của nhóm này.

Về nguyên tắc, chúng ta biết phép toán nhóm là gì: một phép toán nhóm kết hợp hai phần tử của nhóm thành phần tử thứ ba, tức là một hàm có chữ ký kiểu sau:

$$\circ :  (A, A) \to A$$

hay tương đương

$$\circ :  A \to A \to A$$

Và với nhóm tích, chúng ta đã nói tập hợp nền của nhóm (gọi là $A$ ở trên) là tích Descartes của hai tập hợp khác, gọi là $G$ và $H$. Vì vậy, khi thay $A$ bằng $G \times H$, định nghĩa trở thành:

$$\circ : G \times H \to G \times H \to G \times H$$

tức là phép toán nhóm nhận một cặp phần tử từ $G$ và $H$, cùng một cặp phần tử khác từ $G$ và $H$, rồi trả về --- đoán xem --- một cặp phần tử của $G$ và $H$. 

Hãy lấy một ví dụ. Để tránh nhầm lẫn, chúng ta lấy hai nhóm hoàn toàn khác nhau --- nhóm pha màu và nhóm các số nguyên với phép cộng. Điều này có nghĩa là một giá trị của $G \times H$ sẽ là một cặp chứa một màu bất kỳ và một số bất kỳ, còn phép toán sẽ kết hợp hai cặp như vậy và tạo ra một cặp khác.

![Các phương trình của tích các số và màu sắc](../11_natural_transformations/product_group_equations.svg)

Bây giờ, phép toán phải tạo ra một cặp chứa một số và một màu. Hơn nữa, sẽ tốt nếu nó tạo ra số *bằng cách dùng hai số ấy*, thay vì chỉ chọn ngẫu nhiên một số; với màu cũng vậy. Và hơn nữa, chúng ta muốn nó hoạt động không chỉ với các monoid số và màu, mà còn với mọi monoid khác được cho. Hiển nhiên chỉ có một lời giải: lấy các phần tử của cặp mới bằng cách kết hợp các phần tử của những cặp đã cho.

![Các lời giải của tích các số và màu sắc](../11_natural_transformations/product_group_solutions.svg)

Và phép toán của nhóm tích của hai nhóm Boolean đã giới thiệu trước đó là sự kết hợp của hai phép toán 

![Nhóm Klein bốn phần tử như một nhóm tích](../11_natural_transformations/klein_four_as_product.svg)

Vậy định nghĩa tổng quát của phép toán như sau ($g1$, $g2$ là phần tử của $G$, còn $h1$ và $h2$ là phần tử của $H$).

$$(g1, h1) \circ (g2, h2) = ( (g1 \circ g2), (h1 \circ h2))$$

Đó chính là nhóm tích.

### Phạm trù tích

Chúng ta quay lại với *phạm trù* tích. 

Vì đã biết *nhóm* tích là gì, và biết nhóm chẳng qua là phạm trù có đúng một đối tượng (còn các đối tượng của nhóm là cấu xạ của phạm trù, nhớ chứ?), chúng ta gần như đã đến nơi.

Đây là một cách tạo phạm trù tích. 

Lấy hai phạm trù bất kỳ:

![Phạm trù tích - các thành phần](../11_natural_transformations/product_components.svg)

Sau đó lấy tập hợp mọi cặp có thể của các đối tượng thuộc hai phạm trù này.

![Phạm trù tích - các đối tượng](../11_natural_transformations/product_set.svg)

Và cuối cùng, chúng ta tạo một phạm trù từ tập hợp ấy bằng cách lấy mọi cấu xạ xuất phát từ một trong hai phạm trù rồi sao chép chúng cho mọi cặp có các đối tượng xuất hiện trong chữ ký kiểu của chúng, giống cách đã làm với nhóm tích (trong ví dụ này, chỉ một trong các phạm trù có cấu xạ).

![Phạm trù tích](../11_natural_transformations/product_category.svg)

Đây là *phạm trù tích* của hai phạm trù.


{: .definition}

> Phạm trù tích của hai phạm trù $C$ và $D$, ký hiệu $C \times D$, là một phạm trù có tập hợp nền là tập hợp tích của các tập hợp nền của $C$ và $D$. Các cấu xạ của nó là các cấu xạ kết hợp của $C$ và $D$, được biến đổi sao cho chúng thay đổi một phần tử của cặp. Tức là, với mỗi cấu xạ $f$ trong $C$, chúng ta có một cấu xạ $(f(c), d)$ trong $C \times D$; tương tự với mỗi cấu xạ trong $D$.

### Biến đổi tự nhiên như hàm tử của phạm trù tích

Trong phần này, chúng ta quan tâm đến các tích của một phạm trù cụ thể: phạm trù gọi là $2$, chứa hai đối tượng và một cấu xạ (được biểu diễn đầy phong cách bằng màu đen trắng).

![Phạm trù 2](../11_natural_transformations/category_two.svg)

Phạm trù này là chìa khoá để xây dựng một hàm tử tương đương với một biến đổi tự nhiên:

- Vì có hai đối tượng, nó tạo ra hai bản sao của phạm trù nguồn.
- Vì hai đối tượng được nối với nhau, hai bản sao được nối cùng cách như hai "ảnh" trong phạm trù đích được nối. 

Vậy với một phạm trù tích của $2$ và một phạm trù khác $C$...

![Phạm trù 2](../11_natural_transformations/product_category_target_category.svg)

...tồn tại một biến đổi tự nhiên giữa $C$ và phạm trù tích $2\times C$.

![Phạm trù tích](../11_natural_transformations/product_category_natural_transformation.svg)

Hơn nữa, mối liên hệ này là hai chiều: 

{: .theorem}

> Bất kỳ biến đổi tự nhiên nào từ phạm trù $C$ đến một phạm trù khác $D$ đều có thể được biểu diễn bằng một hàm tử $2 \times C \to D$, và ngược lại.

Nghĩa là, nếu có một biến đổi tự nhiên $\alpha : F \Rightarrow G$ (trong đó $F: C \to D$ và $G: C \to D$), thì cũng có một hàm tử $2 \times C \to D$ sao cho, nếu lấy phạm trù con của $2 \times C$ chỉ gồm những đối tượng có đối tượng $0$ là một thành phần của cặp, cùng các cấu xạ giữa chúng, chúng ta được một hàm tử tương đương với $F$; còn nếu xét phạm trù con chứa $1$, thì hàm tử tương đương với $G$ (chúng ta viết $\alpha(-,0)=F$ và $\alpha(-,1)=G$). Thế là xong!

**Bài tập 5:** Chỉ ra rằng hai định nghĩa tương đương.

Góc nhìn này giúp chúng ta nhận ra một biến đổi tự nhiên có thể được xem như một họ hình vuông giao hoán. Hàm tử nguồn định nghĩa cạnh bên trái của mỗi hình vuông; hàm tử đích định nghĩa cạnh bên phải; còn các cấu xạ biến đổi nối hai cạnh ấy.

![Ký pháp cho biến đổi tự nhiên](../11_natural_transformations/natural_transformation_notation.svg)

Chúng ta thậm chí có thể lấy lại cấu trúc của phạm trù nguồn của các hàm tử này; điều đó (vì phạm trù theo định nghĩa là cấu trúc và không có gì hơn) tương đương với lấy lại chính phạm trù.

<!--
{% if site.distribution != 'print' %}
-->


### Phần xen kẽ: Tính tự nhiên trong các phép toán nhóm tích

Bây giờ, chúng ta sẽ có một phần xen kẽ khá kỳ lạ, chỉ ra rằng phép toán nhóm của các nhóm tích thực ra là một biến đổi tự nhiên. 

Để hiểu vì sao, hãy nhìn lại các phương trình một lần nữa.

![Các phương trình của tích các số và màu sắc](../11_natural_transformations/product_group_equations.svg)

Chúng ta đã nói rằng để các lời giải của những phương trình này có nghĩa, chúng phải hoạt động với mọi monoid, chứ không chỉ số và màu. Nói cách khác, phải có một cơ chế nhận hai monoid và tạo ra monoid thứ ba. Cơ chế này không thể là gì hơn (hay kém) một hàm đa hình.

$$\forall G H. G \to H \to G \times H$$

Ở trên, chúng ta đã chỉ ra các hàm đa hình là biến đổi như thế nào (hàm này khó suy luận hơn vì được tham số hoá theo hai kiểu thay vì một, nhưng trong chương 2, chúng ta đã học cách biểu diễn hàm nhận hai đối số bằng hàm nhận một đối số).

Và điều kiện tự nhiên đảm bảo lời giải tạo ra một số/màu, v.v. *bằng cách dùng hai số/màu được cung cấp*, thay vì chỉ chọn ngẫu nhiên một thứ.

Bạn có thể chứng minh điều kiện tự nhiên quả thực đúng (đúng ngay từ cách xây dựng) với mọi nhóm tích.

<!--
{%endif%}
-->

## Hợp thành các biến đổi tự nhiên

Biến đổi tự nhiên chắc chắn là một loại rất khác với cấu xạ và hàm tử thông thường, nên chúng không hợp thành theo cùng cách. Tuy nhiên, chúng có hợp thành, và ở đây chúng ta sẽ chỉ ra cách làm.

### Biến đổi tự nhiên đồng nhất

Trước hết, hãy xử lý một định nghĩa hiển nhiên: 

{: .definition}

> Với mỗi hàm tử, chúng ta có biến đổi tự nhiên đồng nhất (thực ra là một đẳng cấu tự nhiên) giữa nó và chính nó.

![Biến đổi tự nhiên đồng nhất](../11_natural_transformations/identity_natural_transformation.svg)

### Phép hợp thành ngang

Cách sắp đặt để hợp thành các biến đổi tự nhiên có thể trông phức tạp khi bạn gặp lần đầu: chúng ta cần ba phạm trù $C$, $D$ và $E$ (giống như phép hợp thành cấu xạ cần ba đối tượng). Chúng ta cần tổng cộng bốn hàm tử chia thành hai cặp: một cặp đi từ $C$ đến $D$, và một cặp đi từ $D$ đến $E$ (để có thể hợp thành hai cặp này, thu được một cặp hàm tử mới đi từ $C \to E$). Tuy nhiên, chúng ta sẽ cố giữ mọi thứ đơn giản và xem biến đổi tự nhiên như một ánh xạ từ cấu xạ đến hình vuông giao hoán. Như đã chỉ ra ở trên, bản thân ánh xạ này đã chứa hai hàm tử.

Vậy giả sử chúng ta có biến đổi tự nhiên $\alpha$ liên quan đến các hàm tử $C \to D$ (thường gọi là $F$ và $G$).

![Ký pháp cho biến đổi tự nhiên](../11_natural_transformations/horizontal_composition_notation.svg) 

Điều gì xảy ra nếu có thêm một biến đổi $\bar\alpha$ liên quan đến các hàm tử đi từ $D \to E$ (ký hiệu $F'$ và $G'$)? Vì một biến đổi tự nhiên ánh xạ mỗi cấu xạ đến một hình vuông, và một hình vuông chứa bốn cấu xạ (hai ảnh chiếu bởi hai hàm tử và hai thành phần của biến đổi), một hình vuông sẽ được ánh xạ đến bốn hình vuông.

Trước hết, hãy vẽ hai hình vuông ứng với mỗi ảnh chiếu của cấu xạ trong $C$.

![Phép hợp thành ngang của biến đổi tự nhiên](../11_natural_transformations/horizontal_composition_squares.svg)

Chúng ta cần thêm hai hình vuông tương ứng với hai cấu xạ là các thành phần của biến đổi tự nhiên $\alpha$. Tuy nhiên, các cấu xạ này nối những đối tượng là đích của hai hàm tử, những đối tượng đã có trong sơ đồ, nên chúng ta chỉ cần vẽ các mối nối giữa chúng.

![Phép hợp thành ngang của biến đổi tự nhiên](../11_natural_transformations/horizontal_composition.svg)

Kết quả là một cấu trúc thú vị, đôi khi được hình dung như một khối lập phương.

![Phép hợp thành ngang của biến đổi tự nhiên](../11_natural_transformations/horizontal_composition_cube.svg)

Thú vị hơn nữa, khi hợp thành theo chiều ngang các hình vuông giao hoán trên các mặt khối lập phương, chúng ta thấy nó chứa không chỉ một mà hai hình vuông giao hoán lớn hơn (trông như *hình chữ nhật* trong sơ đồ này), được thể hiện bằng màu xám và đỏ. Cả hai nối các cấu xạ $F'Ff$ và $G'Gf$. 

![Phép hợp thành ngang của biến đổi tự nhiên](../11_natural_transformations/horizontal_composition_cube_commuting.svg)

Vậy có một biến đổi tự nhiên giữa hàm tử hợp thành $F' \circ F : C \to E$ và $G' \circ G : C \to E$ --- một biến đổi tự nhiên thường được ký hiệu $\bar\alpha \bullet \alpha$ (bằng một dấu chấm đen).

**Bài tập 6:** Chỉ ra rằng các biến đổi tự nhiên quả thực hợp thành được; tức là nếu có các biến đổi tự nhiên $F'Ff \Rightarrow F'Gf$  và  $F'Gf \Rightarrow G'Gf$, thì có $F'Ff \Rightarrow G'Gf$. 


### Ghép bên

Một trường hợp đặc biệt thú vị của phép hợp thành ngang là phép hợp thành ngang liên quan đến biến đổi tự nhiên đồng nhất: với một biến đổi tự nhiên $\bar\alpha$ liên quan đến các hàm tử có chữ ký $D \to E$ và một hàm tử nào đó có chữ ký $F : C \to D$, chúng ta có thể lấy $\alpha$ là biến đổi tự nhiên đồng nhất giữa hàm tử $F$ và chính nó, rồi hợp thành với $\bar\alpha$. 

![Phép hợp thành ngang của biến đổi tự nhiên](../11_natural_transformations/horizontal_composition_whiskering.svg)

Chúng ta được một biến đổi tự nhiên mới $\bar\alpha \bullet \alpha$, gần như giống biến đổi ban đầu (tức giống $\bar\alpha$), vậy có gì hay? Chúng ta vừa tìm ra cách *mở rộng* biến đổi tự nhiên bằng hàm tử: tức là có thể dùng một hàm tử có chữ ký $C \to D$ để mở rộng một biến đổi tự nhiên $D \to E$ thành $C \to E$.

**Bài tập 7**: Hãy thử mở rộng biến đổi tự nhiên theo chiều kia (bằng cách lấy $\bar\alpha$ là đồng nhất). 

Vậy đó là cách hợp thành các biến đổi tự nhiên. Tiếc là dạng hợp thành này khác phép hợp thành phạm trù chuẩn. Vì thế, tôi đoán biến đổi tự nhiên không tạo thành phạm trù như chúng ta đã hy vọng...

Ừ thì, thực ra còn một cách hợp thành phạm trù khác, có lẽ sẽ có tác dụng.

### Phép hợp thành dọc

Hãy nhớ phép hợp thành phạm trù liên quan đến ba đối tượng và hai mũi tên nối tiếp giữa chúng. Với phép hợp thành dọc của biến đổi tự nhiên, chúng ta cần ba (hoặc nhiều hơn) *hàm tử* có cùng chữ ký kiểu, chẳng hạn $F, G, H: C \to D$, tức cùng phạm trù nguồn và đích, và hai *biến đổi tự nhiên* nối tiếp giữa các hàm tử ấy, tức $\alpha: F \to G$ và $\beta: G \to H$. 

![Phép hợp thành dọc của biến đổi tự nhiên](../11_natural_transformations/vertical_composition.svg)

Chúng ta có thể kết hợp mỗi cấu xạ của biến đổi tự nhiên $\alpha$ (chẳng hạn $a: F \to G$) với cấu xạ tương ứng của biến đổi tự nhiên $\beta$ (chẳng hạn $b:G \to H$) để được một cấu xạ mới, gọi là $b \circ a : F \to H$ (toán tử hợp thành là vòng tròn trắng thông thường, khác với dấu chấm đen biểu thị phép hợp thành ngang). Và tập hợp tất cả các cấu xạ như vậy chính là các thành phần của một biến đổi tự nhiên mới: $\beta \circ \alpha : F \to H$.

> Với ba *hàm tử* $F, G, H: C \to D$ và hai *biến đổi tự nhiên* nối tiếp giữa chúng, tức $\alpha: F \to G$ và $\beta: G \to H$, có một biến đổi tự nhiên $\beta \circ \alpha : F \to H$ với các thành phần là hợp thành của mỗi cấu xạ của biến đổi tự nhiên $\alpha$ (chẳng hạn $a: F \to G$) với cấu xạ tương ứng của biến đổi tự nhiên $\beta$ (chẳng hạn $b:G \to H$).

### Các phạm trù hàm tử

Giờ đã gần hết chương, chúng ta sẽ giới thiệu phạm trù của mình rồi kết thúc. Để làm điều đó, trước hết chúng ta giới thiệu một ký pháp gọn hơn cho phép hợp thành dọc của các biến đổi tự nhiên (trong đó chúng quả thực trông thẳng đứng).

Chúng ta đã bắt đầu chương này bằng cách nhìn vào phạm trù các tập hợp và dùng sơ đồ bên trong, thể hiện các phần tử tập hợp như những điểm và các tập hợp/đối tượng như những họ phần tử. 

![Phép hợp thành dọc của biến đổi tự nhiên - sơ đồ bên trong](../11_natural_transformations/vertical_composition_internal.svg)

**Bài tập 8:** Xác định hàm, ba hàm tử và hai biến đổi tự nhiên được dùng trong sơ đồ này.

<!--
answer
(A little note, if you want to understand the diagram better: $F$ and $G$ are the $List$ functor, $H$ is the $ID$ functor, $\alpha$ is  $reverse: List \to List$ and $\beta$ is $head : List \to ID$ and $f$ is $length : string \to int$)
-->

Sau đó, chúng ta nhanh chóng chuyển sang các sơ đồ bên ngoài thông thường, trong đó đối tượng là điểm và phạm trù là các họ đối tượng.

![Phép hợp thành dọc của biến đổi tự nhiên](../11_natural_transformations/vertical_composition.svg)

Và bây giờ, chúng ta đi xa hơn một mức nữa, thể hiện phạm trù các phạm trù, trong đó phạm trù là điểm và hàm tử là cấu xạ.

![Phép hợp thành dọc của biến đổi tự nhiên trong Cat](../11_natural_transformations/vertical_composition_cat.svg)

Trong ký pháp này, chúng ta thể hiện biến đổi tự nhiên như các mũi tên (kép) giữa các cấu xạ.

![Phép hợp thành dọc của biến đổi tự nhiên trong Cat](../11_natural_transformations/vertical_composition_cat_2.svg)

Và bạn đã có thể thấy phạm trù mới được tạo thành: 

{: .definition}

> Với mỗi cặp phạm trù $C$ và $D$, tồn tại một phạm trù có các hàm tử $C \to D$ làm đối tượng và các biến đổi tự nhiên giữa những hàm tử ấy làm cấu xạ. 

![Phép hợp thành dọc của biến đổi tự nhiên trong Cat](../11_natural_transformations/functor_category.svg)

Biến đổi tự nhiên hợp thành bằng phép hợp thành dọc, và dĩ nhiên, biến đổi tự nhiên đồng nhất là cấu xạ đồng nhất.

### Luật trao đổi

Phép hợp thành dọc và ngang của biến đổi tự nhiên liên hệ với nhau theo cách sau: 

Nếu có (như đã có) hai biến đổi tự nhiên nối tiếp theo chiều dọc, như $\alpha: F \to G$ và $\beta: G \to H$.

![Luật trao đổi -- thành phần ngang](../11_natural_transformations/interchange_law_horizontal.svg)

Và hai biến đổi nối tiếp khác, lần này theo chiều ngang, chẳng hạn $\bar\alpha: F' \to G'$ và $\bar\beta: G' \to H'$. (Lưu ý rằng $\alpha$ không liên quan đến $\bar\alpha$, cũng như $\beta$ không liên quan đến $\bar\beta$; chúng ta chỉ gọi như vậy để tránh dùng quá nhiều chữ cái.)

![Luật trao đổi -- thành phần dọc](../11_natural_transformations/interchange_law_vertical.svg)

Và nếu hai cặp biến đổi tự nhiên đều bắt đầu từ cùng một phạm trù và cùng một hàm tử, thì các hợp thành của hai cặp biến đổi tự nhiên tuân theo luật sau

$$(β \circ α) \bullet (\bar β \circ \bar α) = (β \bullet \bar β) \circ (α \bullet \bar α)$$

---

**Bài tập 9:** Vẽ các đường đi của hai hợp thành các biến đổi (ở hai vế của phương trình) và xác nhận chúng quả thực dẫn đến cùng một chỗ. 

![Luật trao đổi](../11_natural_transformations/interchange_law.svg)

---

### 2-Phạm trù

Đến lúc này, bạn có thể đang tự hỏi điều sau (dù về mặt thống kê, có lẽ bạn đang tự hỏi tất cả những thứ này là cái quái gì): chúng ta biết mọi phạm trù là đối tượng của $Cat$, phạm trù các phạm trù nhỏ, trong đó hàm tử đóng vai trò cấu xạ. 

Nhưng các hàm tử giữa những phạm trù cho trước cũng tạo thành một phạm trù với phép hợp thành dọc. Điều này có nghĩa là $Cat$ không chỉ có cấu xạ giữa các đối tượng (như mọi phạm trù khác), *mà* còn có *cấu xạ giữa các cấu xạ*. Hơn nữa, hai loại cấu xạ này hợp thành theo một cách rất thú vị. 

Vậy điều đó khiến $Cat$ trở thành gì? Tôi không biết, có lẽ chúng ta có thể gọi biến đổi tự nhiên là "2-cấu xạ", và $Cat$ là một loại "2-phạm trù" chăng?

Nhưng khoan, thực ra vẫn còn quá sớm để bạn biết. Chúng ta còn chưa tìm hiểu giới hạn...

<!--
{% if site.distribution != 'print' %}
-->

## Lời giải 

---

**Bài tập 1:** Kiểm tra xem định nghĩa này có đúng không.

Định nghĩa đang nói đến là:

> Hai **phạm trù** $A$ và $B$ **đẳng cấu** (hay $A \cong B$) nếu tồn tại *hàm tử* $f: A \to B$ và hàm tử đảo của nó $g: B \to A$, sao cho $f \circ g = ID_{B}$ và $g \circ f = ID_{A}$.

Chúng ta có thể kiểm tra bằng cách khai triển định nghĩa hàm tử.

Hàm tử gồm:
1. Ánh xạ đối tượng
2. Ánh xạ cấu xạ
3. Các luật

Khai triển ánh xạ đối tượng cho chúng ta chính xác định nghĩa đẳng cấu tập hợp:

> Hai **tập hợp** $A$ và $B$ **đẳng cấu** (hay $A ≅ B$) nếu tồn tại hàm $f: A \to B$ và hàm đảo của nó $g: B \to A$, sao cho $f \circ g = ID_{A}$ và $g \circ f = ID_{A}$.

Khai triển ánh xạ cấu xạ và luật sẽ cho phần còn lại.

---

**Bài tập 2:** Chính xác khi nào ánh xạ bao gồm mọi đối tượng?

Như đã nói ở trên: 
> Ánh xạ các thành phần đối tượng của hai hàm tử chẳng qua là chỉ định một loạt cấu xạ trong phạm trù đích: một cấu xạ cho mỗi đối tượng trong phạm trù nguồn, tức từ mỗi đối tượng trong ảnh của hàm tử thứ nhất phải có một mũi tên xuất phát.

Vậy ánh xạ bao gồm mọi đối tượng *trong ảnh của hàm tử*. Khi nào điều đó bao gồm mọi đối tượng, không có giới hạn gì nữa? Đơn giản --- khi hàm tử là một-một (hay toàn ánh, nếu chúng ta chấp nhận có nhiều hơn một mũi tên cho mỗi đối tượng). Rất có thể điều đó sẽ xảy ra khi hai phạm trù thực ra là cùng một phạm trù và hàm tử là hàm tử đồng nhất.

---

**Bài tập 3:** Vẽ các hình vuông tự nhiên minh hoạ cho biến đổi tự nhiên $reverse$.

Để vẽ một hình vuông của biến đổi tự nhiên $reverse: List\ a \to List\ a$, trước hết chúng ta phải:
1. Chọn một hàm $f$, chẳng hạn $+1 : number \to number$. 
2. Nâng nó bằng hàm tử; chẳng hạn $Ff: List number \to List number$ cộng một vào mỗi số trong danh sách.

Sau đó:
1. Vẽ kết quả áp dụng hàm lên các tập hợp ở phía trên vào các ô tương ứng ở phía dưới; chẳng hạn $[1, 2]$ trở thành $[2, 3]$.
2. Vẽ các mối nối của việc áp dụng biến đổi tự nhiên $reverse$.

Nếu làm đúng, hình vuông sẽ giao hoán.

---

**Bài tập 4:** Chứng minh các kết quả trên bằng công thức của điều kiện tự nhiên.

Chúng ta muốn chứng minh rằng:

$$take1 \circ reverse \circ F\ f \circ F\ g$$

giống với 

$$take1 \circ F\ f \circ reverse \circ F\ g$$

Chúng ta lưu ý rằng một phần của phương trình chứa một hàm "được nâng" (là kết quả của việc áp dụng hàm tử), rồi đến một biến đổi tự nhiên:

$$take1 \circ (F\ f \circ reverse) \circ F\ g$$

Điều kiện tự nhiên nói rằng

$$\alpha \circ F\ f \cong G\ f \circ \alpha$$

Chúng ta có thể thay $\alpha$ bằng $reverse$ (vì $reverse$ là một biến đổi tự nhiên), và thay cả $F\ f$ lẫn $G\ f$ bằng $F\ f$ (vì $F$ và $G$ là cùng một hàm tử (danh sách))

$$reverse \circ F\ f \cong F\ f \circ\ reverse$$

Áp dụng điều này, chúng ta được:

$$take1 \circ (reverse \circ F\ f) \circ F\ g$$

---

**Bài tập 5:** Chỉ ra rằng hai định nghĩa [của biến đổi tự nhiên] tương đương.

Điều này gồm việc rút ra một biến đổi tự nhiên từ một hàm tử $2 \times C \to D$, và ngược lại. 

Ở đây, chúng ta sẽ mô tả một chiều của quá trình:

Như đã nói, chúng ta có thể tách phạm trù $2 \times C$ thành hai phạm trù con (hãy gọi là $C^1$ và $C^2$), cả hai đều đẳng cấu với $C$: một phạm trù chứa các đối tượng được ghép cặp với đối tượng thứ nhất của $2$, và một phạm trù chứa các đối tượng được ghép cặp với đối tượng thứ hai.

Tương tự, chúng ta có thể tách hàm tử $2 \times C \to D$ thành hai hàm tử $C^1 \to D$ và $C^2 \to D$. 

Bây giờ, chúng ta chỉ cần chỉ ra rằng có một biến đổi tự nhiên giữa hai hàm tử ấy; tức là phải tìm một họ cấu xạ trong phạm trù $D$ nối các ảnh của hai hàm tử. 

Họ này là ảnh của các cấu xạ từ phạm trù $2$; tức là nếu đi qua $2 \times C \to D$ và thu thập mọi cấu xạ trong $D$ đến từ phạm trù $2$, chúng ta đã có biến đổi của mình.

Biến đổi này tự nhiên vì cách định nghĩa phép hợp thành của phạm trù tích (được định nghĩa là phép hợp thành theo từng thành phần của các cấu xạ thuộc những phạm trù tham gia vào tích).

---

**Bài tập 6:** Chỉ ra rằng các biến đổi tự nhiên quả thực hợp thành được; tức là nếu có các biến đổi tự nhiên $ \alpha: F'F \Rightarrow F'G$  và  $\bar\alpha : F'G \Rightarrow G'G$, thì có $\bar\alpha \bullet \alpha : F'F \Rightarrow G'G$. 

Để chỉ ra hai biến đổi hợp thành được, chúng ta cần tìm cách xây dựng một biến đổi mới từ hai biến đổi tự nhiên có các chữ ký trên.

Để làm điều đó, chúng ta nhớ rằng một biến đổi tự nhiên chỉ là một họ cấu xạ, một cấu xạ cho mỗi đối tượng trong phạm trù $C$ (và chúng ta biết cách hợp thành cấu xạ). 

Với mỗi đối tượng $c$ trong $C$, gọi $\bar\alpha_c$ là cấu xạ tương ứng với nó trong biến đổi tự nhiên $\bar\alpha$, và gọi $\alpha_c$ là cấu xạ tương ứng với nó trong $\alpha$.

Khi đó, cấu xạ tương ứng với nó trong $\bar\alpha \bullet \alpha$ là $\bar\alpha_c ∘ F'(\alpha_c)$ nếu bạn đi theo các mũi tên xám của khối lập phương, hoặc cũng có thể là $$(\bar\alpha \bullet \alpha)_c = G'(\bar\alpha_c) ∘ \alpha_c$$ nếu đi theo các mũi tên xám. Hoặc chỉ là $\bar\alpha_c ∘ \alpha_c$ nếu không quá quan tâm đến ký pháp.

Việc các cấu xạ như vậy tạo thành một biến đổi suy ra từ các chữ ký của cấu xạ.

Biến đổi này tự nhiên vì với tất cả các cấu xạ ấy, chúng ta có hình vuông giao hoán.

![Phép hợp thành ngang của biến đổi tự nhiên](../11_natural_transformations/horizontal_composition_cube_commuting.svg)

---

**Bài tập 7**: Hãy thử mở rộng biến đổi tự nhiên theo chiều kia (bằng cách lấy $\bar\alpha$ là đồng nhất). 

Về cơ bản, nó hoạt động cùng cách và kết quả cũng như nhau --- bạn có một biến đổi tự nhiên mới với chữ ký khác.

---

**Bài tập 8:** Xác định hàm, ba hàm tử và hai biến đổi tự nhiên được dùng trong sơ đồ này.

![Phép hợp thành dọc của biến đổi tự nhiên - sơ đồ bên trong](../11_natural_transformations/vertical_composition_internal.svg)

Trước hết là các hàm tử: $F$ và $G$ là hàm tử $List$, còn $H$ là hàm tử $ID$.

Các biến đổi tự nhiên: $\alpha$ là $reverse: List \to List$, còn $\beta$ là $head : List \to ID$ (hoặc nếu muốn chính xác, kiểu phải là danh sách *Không rỗng* của nó, vì $head$ chỉ là một biến đổi tự nhiên bộ phận của $List$).

Hàm $f$, như thường lệ, là $length : string \to int$.

---

**Bài tập 9:** Vẽ các đường đi của hai hợp thành các biến đổi (ở hai vế của phương trình) và xác nhận chúng quả thực dẫn đến cùng một chỗ.

Một cách là như sau:

![Luật trao đổi](../11_natural_transformations/interchange_law_solution.svg)

---

<!--
{%endif%}
-->
