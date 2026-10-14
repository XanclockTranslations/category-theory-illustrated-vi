---
layout: default
title: Tập hợp
---

# Tập hợp

Sẵn sàng, *tập hợp*, bắt đầu... (bạn không biết tôi đã cố cưỡng lại việc chơi chữ ấy đến mức nào đâu). Chúng ta bắt đầu tìm hiểu bằng lý thuyết tập hợp. Lý thuyết tập hợp và lý thuyết phạm trù có nhiều điểm tương đồng. Ta có thể xem lý thuyết phạm trù như một sự *khái quát hoá* của lý thuyết tập hợp. Nghĩa là, nó nhằm mô tả cùng những điều mà lý thuyết tập hợp mô tả (mọi thứ chăng?), nhưng theo một cách trừu tượng hơn, linh hoạt hơn và (hy vọng là) đơn giản hơn.

Ngoài ra, các tập hợp là một *ví dụ về phạm trù* (có thể nói là *ví dụ nguyên mẫu*), và việc có những ví dụ thì rất hữu ích.

## Lý thuyết trừu tượng là gì


> Thay vì hỏi có thể định nghĩa và suy ra điều gì từ những điều đã giả định lúc đầu, chúng ta hỏi có thể tìm được những ý tưởng và nguyên lý tổng quát hơn nào, để từ đó định nghĩa hoặc suy ra những điều từng là điểm xuất phát của mình.
> Bertrand Russell, trích Introduction to Mathematical Philosophy

Hầu hết các lý thuyết khoa học và toán học đều có một *miền* cụ thể mà chúng gắn bó và có hiệu lực trong đó. Chúng được xây dựng với miền này trong đầu và không nhằm dùng bên ngoài miền ấy. Chẳng hạn, thuyết tiến hoá của Darwin được xây dựng để giải thích cách các *loài sinh vật* khác nhau tiến hoá nhờ chọn lọc tự nhiên, cơ học lượng tử mô tả cách các hạt hoạt động ở một thang đo cụ thể, v.v.

Ngay cả các lý thuyết toán học, dù về bản chất không *bị ràng buộc* với một miền cụ thể (như các lý thuyết khoa học), cũng ít nhất có liên hệ chặt chẽ với một miền nào đó; chẳng hạn, phương trình vi phân được xây dựng để mô hình hoá cách các sự kiện thay đổi theo thời gian.

Lý thuyết tập hợp và lý thuyết phạm trù thì khác: chúng không được xây dựng để giải thích chặt chẽ cách một hiện tượng cụ thể hoạt động, mà cung cấp một khuôn khổ tổng quát hơn để giải thích đủ loại hiện tượng. Chúng hoạt động ít giống công cụ hơn, và giống ngôn ngữ để định nghĩa công cụ hơn. Những lý thuyết như vậy được gọi là lý thuyết *trừu tượng*.

Ranh giới giữa hai loại đôi khi khá mờ. Mọi lý thuyết đều *sử dụng sự trừu tượng hoá*, nếu không thì chúng sẽ chẳng mấy hữu ích: không có sự trừu tượng hoá, Darwin sẽ phải nói về từng loài động vật cụ thể, hoặc thậm chí từng cá thể động vật. Điểm khác biệt là các lý thuyết trừu tượng có những *khái niệm cốt lõi* không chỉ đến điều gì cụ thể, mà để người dùng tự khái quát. Mọi lý thuyết đều có thể áp dụng bên ngoài miền của chúng, nhưng lý thuyết tập hợp và lý thuyết phạm trù ngay từ đầu đã không có một miền như vậy.

Các lý thuyết cụ thể, như thuyết tiến hoá, được cấu thành từ những khái niệm cụ thể. Chẳng hạn, khái niệm *quần thể*, còn gọi là *vốn gen*, chỉ một nhóm cá thể có thể giao phối với nhau. Các lý thuyết trừu tượng, như lý thuyết tập hợp, được cấu thành từ những khái niệm trừu tượng, chẳng hạn khái niệm tập hợp. Bản thân khái niệm tập hợp không chỉ đến điều gì. Tuy nhiên, ta không thể nói đó là một khái niệm rỗng, vì có vô số thứ có thể biểu diễn bằng tập hợp; chẳng hạn, vốn gen có thể được biểu diễn (rất thích hợp) bằng các tập hợp cá thể động vật. Các loài động vật cũng có thể được biểu diễn bằng tập hợp &mdash; một tập hợp gồm mọi quần thể về lý thuyết có thể giao phối với nhau.

Bạn đã thấy các lý thuyết trừu tượng có thể hữu ích như thế nào. Vì rất đơn giản, chúng có thể dùng làm những viên gạch xây nên nhiều lý thuyết cụ thể. Vì được dùng chung, chúng có thể giúp thống nhất và so sánh các lý thuyết cụ thể khác nhau bằng cách đặt những lý thuyết ấy trên cùng một nền tảng (đây là một nét rất đặc trưng của lý thuyết phạm trù, như chúng ta sẽ thấy sau). Hơn nữa, các lý thuyết (trừu tượng) tốt có thể đóng vai trò *mô hình tư duy* để phát triển suy nghĩ của chúng ta.

<!-- comic - brain on category theory -->

<!--
People have tried to be precise and at the same time down to Earth for centuries, and only recently discovered that "precise and down to Earth" is an oxymoron. Let's take Euclidean geometry as an example. Yes, Euclidean geometry is precise, because it is valid for all sets of objects, called ("point", "line", "angle", "circle", etc.), which have relationships, as defined by the five famous axioms. Yes, geometry does, in many instances, describe the natural world, because there are many sets of objects which have these relations. However, its "precise" part and its "down to Earth" part have nothing to do with each other. We can, for example, define a point as any stain on the floor of your room and a line as a piece of duct tape, put on the same floor. That will be a completely valid application of the Euclidean laws, albeit not very useful one. Or we can try to use geometry to reason about points on the surface of the Earth, which is a very useful application of geometry, however not of Euclidean geometry, because Euclidean geometry only describes points on a flat plane, and the Earth is not flat. You can argue that these are actually two separate theories there, which just happen to be perceived as one. You have the axioms, or the postulates on one hand, which are not useful for anything on their own, and you have applications in science and engineering which are somewhat based on them, but not quite. 
-->

## Tập hợp


> “Tập hợp là sự gom lại thành một toàn thể những đối tượng xác định, phân biệt trong nhận thức hoặc tư duy của chúng ta—được gọi là các phần tử của tập hợp.” – Georg Cantor

Có lẽ không có gì ngạc nhiên: mọi thứ trong lý thuyết tập hợp đều được định nghĩa theo tập hợp. Tập hợp là một bộ sưu tập các thứ, trong đó những “thứ” ấy có thể là bất cứ gì bạn muốn (như cá thể, quần thể, gen, v.v.). Chẳng hạn, hãy xét những quả bóng này.

![Những quả bóng](../01_set/elements.svg)


Hãy xây dựng một tập hợp, gọi là $G$ (viết tắt của gray, nghĩa là xám), chứa *tất cả* chúng làm phần tử. Chỉ có thể có một tập hợp như vậy, vì tập hợp không có cấu trúc.

{: .definition}

> Tập hợp là một bộ sưu tập các phần tử, không chứa cấu trúc nào ngoài việc những phần tử nào thuộc về nó.

Vậy nên không có thứ tự, không có vị trí, không quả bóng nào đứng trước hay sau quả bóng khác, không phần tử nào là “đặc biệt” xét về việc nó thuộc tập hợp. Hai tập hợp chứa cùng các phần tử chỉ là hai hình ảnh của cùng một tập hợp.

![Tập hợp mọi quả bóng](../01_set/all.svg)

Ví dụ này có vẻ quá đơn giản, nhưng thực ra nó cũng hợp lệ như mọi ví dụ khác.

Nhận xét cốt lõi làm cho khái niệm này hữu ích là: nó cho phép bạn suy luận về nhiều thứ như thể chúng là một.
 
### Tập hợp con


Hãy xây dựng thêm một tập hợp nữa. Tập hợp gồm *mọi quả bóng có màu nóng*. Gọi nó là $Y$ (vì trên sơ đồ, nó được tô màu vàng, tức **y**ellow).

![Tập hợp mọi quả bóng có màu nóng](../01_set/subset.svg)

Chú ý rằng $Y$ chỉ chứa những phần tử cũng có trong $G$. Khi hai tập hợp có quan hệ này, ta có thể nói $Y$ là một *tập hợp con* của $G$.

{: .definition}

> $Y$ là tập hợp con của $G$ (hay $Y \subseteq G$) nếu mọi phần tử của tập hợp $Y$ cũng là phần tử của tập hợp $G$.

Khi vẽ hai tập hợp cùng nhau, tập hợp con nằm hoàn toàn bên trong tập hợp chứa nó.

![Y và G được vẽ cùng nhau](../01_set/set_subset.svg)

### Tập hợp đơn

Tập hợp mọi *quả bóng đỏ* chỉ chứa một quả bóng. Ở trên, chúng ta đã nói tập hợp gom *nhiều* phần tử thành một. Dù vậy, tập hợp chỉ chứa một phần tử vẫn hoàn toàn hợp lệ &mdash; có những thứ là *độc nhất*.
 
{: .definition}

> Tập hợp đơn là tập hợp chứa một phần tử.

Tập hợp các vị vua/nữ hoàng của một vương quốc cho trước là một tập hợp đơn.

![Tập hợp đơn gồm các quả bóng đỏ](../01_set/singleton.svg)

Tập hợp đơn có ích gì? Nó là một phần của ngôn ngữ lý thuyết tập hợp; chẳng hạn, nếu ta có một hàm đòi hỏi một tập hợp các phần tử cho trước, nhưng chỉ có một phần tử đáp ứng tiêu chí, ta có thể tạo một tập hợp đơn chứa phần tử ấy.

### Tập hợp rỗng

Dĩ nhiên, nếu một là câu trả lời hợp lệ thì không cũng có thể là như vậy. Nếu ta muốn một tập hợp gồm mọi *quả bóng đen* $B$, hoặc mọi *quả bóng trắng* $W$, câu trả lời cho tất cả những câu hỏi này đều giống nhau &mdash; tập hợp rỗng.

![Tập hợp rỗng](../01_set/void.svg)


Vì tập hợp chỉ được xác định bởi những phần tử nó chứa, tập hợp rỗng là *duy nhất* &mdash; chẳng hạn, không có sự khác biệt giữa tập hợp chứa không *quả bóng* nào và tập hợp chứa không *số* nào.

{: .definition}

> Tập hợp rỗng là tập hợp không chứa phần tử nào.

Về mặt hình thức, tập hợp rỗng được ký hiệu bằng $\varnothing$ (nên $B = W = \varnothing$).

Tập hợp rỗng có một số tính chất đặc biệt; chẳng hạn, nó là tập hợp con của mọi tập hợp khác. Viết theo ngôn ngữ toán học, $\forall A  \to \varnothing \subseteq A$ ($\forall$ nghĩa là “với mọi”).

## Hàm

> “Tôi hiểu hàm là sự thống nhất của hành động sắp xếp các biểu tượng khác nhau dưới một biểu tượng chung.” --- Immanuel Kant, trích “The Critique of Pure Reason”

Đã đến lúc thú nhận một điều: chương này thực ra không nói về tập hợp. Nó nói về hàm, và chúng ta chỉ bắt đầu như vậy vì không có cách nào giải thích hàm mà không giải thích tập hợp (dù nếu đọc tiếp, bạn sẽ thấy thật ra có một cách).

{: .definition}

> Hàm là một quan hệ nhiều-một giữa hai tập hợp: nó ghép mỗi phần tử của một tập hợp, gọi là *tập nguồn* của hàm, với đúng một phần tử của tập hợp khác, gọi là *tập đích* của hàm.

Hai tập hợp này còn được gọi là *miền xác định* và *đối miền* của hàm, hoặc *đầu vào* và *đầu ra* của nó. Trong lập trình, chúng có tên là *kiểu đối số* và *kiểu trả về*. Trong lôgic, chúng tương ứng với *tiền đề* và *kết luận* (chúng ta sẽ đến phần đó). Tuỳ tình huống, ta cũng có thể nói một hàm cho trước *đi* từ tập hợp này đến tập hợp kia, *nối* tập hợp này với tập hợp kia, hoặc *chuyển đổi* một giá trị thuộc tập hợp này thành một giá trị thuộc tập hợp kia. Những cách gọi khác nhau này cho thấy tính đa diện của khái niệm hàm.

### Các loại hàm khác nhau

Đây là một hàm $f$, chuyển mỗi quả bóng thuộc tập hợp $R$ thành quả bóng có màu đối lập trong một tập hợp khác $G$ (trong toán học, tên hàm thường đi kèm tên tập nguồn và tập đích của nó, như sau: $f: R → G$).

![Các màu đối lập](../01_set/function_one_one.svg)

Đây có lẽ là một trong những loại hàm đơn giản nhất &mdash; nó mã hoá một *quan hệ một-một* giữa các tập hợp. Nghĩa là *một* phần tử ở nguồn được nối với đúng *một* phần tử ở đích (và ngược lại).

Nhưng các hàm thường thể hiện những quan hệ kiểu *nhiều-một*, trong đó *nhiều* phần tử ở nguồn có thể được nối với *một* phần tử ở đích (nhưng không theo chiều ngược lại). Dưới đây là một hàm như vậy.

![Hàm từ tập hợp lớn hơn đến tập hợp nhỏ hơn](../01_set/function_big_small.svg)

Các hàm như vậy có thể biểu diễn những thao tác như *phân loại* một bộ sưu tập đối tượng cho trước theo tiêu chí nào đó, hoặc phân chia chúng dựa trên một tính chất mà chúng có thể có.

Hàm cũng có thể thể hiện những quan hệ trong đó một số phần tử của tập đích không tham gia.

![Hàm từ tập hợp nhỏ hơn đến tập hợp lớn hơn](../01_set/function_small_big.svg)

Một ví dụ có thể là quan hệ giữa một kiểu mẫu hay cấu trúc nào đó và sự xuất hiện của kiểu mẫu ấy trong một bối cảnh phức tạp hơn.

Chúng ta đã thấy hàm linh hoạt đến mức nào, nhưng có một điều bạn không thể có trong một hàm. Bạn không thể có một phần tử nguồn không được ánh xạ tới đâu, hoặc được ánh xạ tới nhiều hơn một phần tử đích &mdash; điều đó sẽ tạo thành một quan hệ *nhiều-nhiều*, mà như đã nói, hàm thể hiện quan hệ nhiều-một. Có lý do cho “quyết định thiết kế” ấy, và chúng ta sẽ sớm đi đến đó.

<!--
{% if site.distribution == 'print'%}
-->

### Phần xen kẽ: Hàm trong đời sống hằng ngày

Tập hợp và hàm có thể thể hiện quan hệ giữa đủ loại đối tượng, kể cả con người. Mọi câu hỏi bạn đặt ra mà có câu trả lời đều có thể biểu diễn bằng một hàm.

Câu hỏi “Chúng ta cách New York bao xa?” là một hàm có tập nguồn là tập hợp mọi địa điểm trên thế giới và tập đích là tập hợp mọi số dương.

Câu hỏi “Cha tôi là ai?” là một hàm có nguồn là tập hợp mọi người trên thế giới.

**Bài tập 1:** Tập đích của hàm này là gì?

Lưu ý rằng câu hỏi “Con tôi là ai?” *KHÔNG* đơn giản là một hàm, vì một người có thể không có con, hoặc có nhiều con. Sau này, chúng ta sẽ học cách biểu diễn những câu hỏi như vậy bằng hàm.

**Bài tập 2:** Tất cả các hàm mà chúng ta vẽ ở đầu phần này có *thể hiện* điều gì không? Bạn có nghĩ rằng một hàm phải thể hiện điều gì đó thì mới hợp lệ không?

<!--
{%endif%}
-->

### Hàm đồng nhất

Với mọi tập hợp $G$, bất kể nó biểu diễn điều gì, ta đều có thể định nghĩa hàm không làm gì cả:

{: .definition}

>Hàm đồng nhất của tập hợp $G$, $ID_{G}: G \to G$, là một hàm ánh xạ mỗi phần tử của $G$ tới chính nó.

![Hàm đồng nhất](../01_set/function_identity.svg)

Bạn có thể xem $ID_{G}$ như một hàm đại diện cho tập hợp $G$ trong thế giới các hàm.

### Hàm và tập hợp con

Một họ hàm thú vị khác (mỗi tập hợp con có một hàm).

{: .theorem}

> Với mỗi tập hợp và tập hợp con của nó, ta có thể định nghĩa một hàm (gọi là *ảnh* của tập hợp con) ánh xạ mỗi phần tử của tập hợp con tới chính nó.

![Hàm từ tập hợp nhỏ hơn đến tập hợp lớn hơn](../01_set/function_small_big.svg)

Mọi tập hợp đều là tập hợp con của chính nó; trong trường hợp ấy, hàm này chính là hàm đồng nhất.

### Hàm và tập hợp rỗng

Dù thoạt nhìn không có vẻ như vậy...

{: .theorem}

> Có một hàm duy nhất từ tập hợp rỗng đến bất kỳ tập hợp nào khác.

![Hàm với tập hợp rỗng](../01_set/function_empty.svg)

**Bài tập 3:** Điều này có thực sự hợp lệ không? Vì sao? Hãy kiểm tra định nghĩa.

Nếu vẫn chưa thấy thuyết phục, hãy xem điều này:
1. Có một hàm giữa tập hợp con và tập hợp chứa nó.
2. Tập hợp rỗng là tập hợp con của bất kỳ tập hợp nào khác.

Vậy rõ ràng hàm này phải tồn tại!

**Bài tập 4:** Còn chiều ngược lại thì sao? Có những hàm có tập hợp rỗng làm đích thay vì làm nguồn không?

### Hàm và tập hợp đơn

Một hàm khác mà chúng ta thường gặp là hàm này.

![Hàm với tập hợp đơn](../01_set/function_singleton.svg)

{: .theorem}

> Có một hàm duy nhất từ bất kỳ tập hợp nào đến bất kỳ tập hợp đơn nào.

**Bài tập 5:** Đây có thực sự là cách duy nhất để nối *bất kỳ* tập hợp nào với một tập hợp đơn một cách hợp lệ không?

**Bài tập 6:** Một lần nữa, chiều ngược lại thì sao?

### Tập hom

Cho hai tập hợp $A$ và $B$ với một số hàm giữa chúng (ở đây chúng ta không vẽ các phần tử của tập hợp, và vẽ mỗi hàm thành một mũi tên)...

![Các tập hợp A và B, cùng ba hàm đi từ tập này đến tập kia](../01_set/hom_a_b.svg)

...ta có thể xây dựng *tập hợp hàm* (thường gọi là *tập hom*) từ $A$ đến $B$, chứa những hàm ấy làm phần tử.

![Một tập hợp chứa ba hàm](../01_set/hom_set.svg)

Nếu không có hàm nào, tập hợp này rỗng.

{: .definition}
> Với các đối tượng $A$ và $B$, tập hợp đồng cấu từ $A$ đến $B$ (ký hiệu $A \Rightarrow B$) là tập hợp chứa một phần tử cho mỗi hàm đi từ $A$ đến $B$.

Lưu ý rằng đây chỉ là một chiều; các hàm giữa $B$ và $A$ thuộc một tập hom khác.

## Số

Mọi phép toán số học đều có thể biểu diễn bằng các hàm tác động lên những tập hợp số (thuộc các loại khác nhau).

### Các tập hợp số

Vì không phải mọi hàm đều dùng được với mọi số, ta chia tập hợp các số thành nhiều tập hợp, trong đó có những tập hợp là tập hợp con của nhau, chẳng hạn tập hợp số nguyên $\mathbb{Z} := {... -3 -2, -1, 0, 1, 2, 3... }$, tập hợp số nguyên dương (còn gọi là số “tự nhiên”) $\mathbb{N} := {0, 1, 2, 3... }$.

![Tập hợp số tự nhiên và tập hợp số nguyên](../01_set/number_sets.svg)


(Vì cả hai tập hợp đều vô hạn, chúng ta không thể vẽ toàn bộ chúng, nhưng có thể vẽ một phần của chúng).

### Các hàm số

> Mỗi sự khái quát hoá khái niệm số ban đầu đều xuất hiện vì cần giải một bài toán đơn giản nào đó: số âm cần thiết để phép trừ luôn thực hiện được, vì nếu không thì a − b sẽ vô nghĩa khi a nhỏ hơn b; phân số cần thiết để phép chia luôn thực hiện được; và số phức cần thiết để việc khai căn và giải phương trình luôn thực hiện được. --- Bertrand Russell, trích Introduction to Mathematical Philosophy

Mỗi phép toán số học là một hàm giữa hai tập hợp số. Chẳng hạn, bình phương một số là một hàm từ tập hợp số thực đến tập hợp số thực không âm.

![Hàm bình phương](../01_set/square.svg)

Tôi sẽ nhân dịp này nhắc lại một số đặc điểm quan trọng hơn của hàm:

- Mọi số ở đích đều có (hoặc nên có) hai mũi tên trỏ tới (một cho căn bậc hai dương, một cho căn bậc hai âm), và như vậy là được.
- Số không ở tập nguồn được nối với chính nó ở tập đích &mdash; điều này được phép.
- Một số số không phải là bình phương của bất kỳ số nào khác &mdash; điều này cũng được phép.

Nhìn chung, mọi thứ đều được phép, miễn là bạn luôn có thể đưa ra đúng một kết quả (còn gọi là *Kết quả™*) cho mỗi giá trị. Với các phép toán số học, điều này luôn đúng, đơn giản vì toán học được thiết kế như vậy.

Lưu ý rằng hầu hết các phép toán, như cộng, nhân, v.v., cần hai số để tạo ra một kết quả. Điều này không có nghĩa chúng không phải hàm, mà chỉ có nghĩa chúng cầu kỳ hơn một chút. Tuỳ theo nhu cầu, ta có thể trình bày những phép toán ấy như các hàm từ tập hợp các *bộ* số đến tập hợp số, hoặc nói rằng chúng nhận một số và trả về một hàm. Chúng ta sẽ nói thêm về điều đó sau.

## Tập hợp và hàm trong lập trình

Tập hợp được dùng rộng rãi trong lập trình, đặc biệt dưới dạng *kiểu* (còn gọi là *lớp*). Tất cả các tập hợp số chúng ta bàn ở trên cũng tồn tại dưới dạng kiểu trong hầu hết các ngôn ngữ.


### Tập hợp và kiểu

Tập hợp không phải cùng một thứ với kiểu, nhưng có thể xem kiểu như tập hợp (hoặc có thể nói chúng *có* tập hợp).

Chẳng hạn, ta có thể xem kiểu `Boolean` như một tập hợp chứa hai phần tử &mdash; `true` và `false`.

![Tập hợp các giá trị Boolean](../01_set/boolean.svg)

Một tập hợp rất cơ bản khác dùng trong lập trình là tập hợp các ký tự trên bàn phím, hay `Char`.

![Tập hợp các ký tự](../01_set/char.svg)

Hầu hết các tập hợp mà chúng ta dùng trong lập trình là tập hợp *phức hợp*; chẳng hạn, tạo một danh sách các `Char` thì bạn có một chuỗi. Sau này, chúng ta sẽ xem việc này diễn ra như thế nào.

**Bài tập 7:** Trong lập trình, kiểu nào tương ứng với tập hợp con?

### Hàm và phương thức/chương trình con

Hàm trong lập trình (còn gọi là phương thức, chương trình con, v.v.) phần nào giống hàm toán học --- chúng nhận một phần tử thuộc một tập hợp cho trước và trả về đúng một phần tử thuộc một tập hợp khác.

Chẳng hạn, đây là một phương thức nhận đối số kiểu `Char` và trả về một `Boolean`, cho biết ký tự ấy có phải là chữ cái hay không.

![Một hàm từ Char đến Boolean](../01_set/char_boolean.svg)

Tuy nhiên, hàm trong hầu hết các ngôn ngữ lập trình cũng có thể rất khác hàm toán học &mdash; chúng có thể thực hiện nhiều thao tác chẳng liên quan gì đến việc trả về một giá trị. Những thao tác này đôi khi được gọi là *hiệu ứng phụ*.

Vì sao hàm trong lập trình lại khác? Tìm ra cách mã hoá các hàm *có hiệu ứng* sao cho hợp lý về mặt toán học không phải chuyện đơn giản, và vào thời điểm phần lớn các mô hình lập trình đang dùng ngày nay ra đời, người ta có những vấn đề lớn hơn việc hàm của họ không hợp lý về mặt toán học (chẳng hạn, làm sao thực sự chạy được bất kỳ chương trình nào).


### Ngôn ngữ lập trình hàm thuần tuý

Nhiều người cảm thấy hàm toán học quá hạn chế và khó dùng. Có thể họ cũng có lý, nhưng hàm toán học có một ưu thế lớn so với hàm phi toán học &mdash; chữ ký kiểu của chúng cho bạn biết gần như mọi điều về những gì hàm làm (đây có lẽ là lý do hầu hết các ngôn ngữ lập trình hàm có kiểu mạnh). Vì vậy, có những ngôn ngữ chỉ cho phép hàm toán học, và trong đó sự tương đồng này đúng. Chúng được gọi là ngôn ngữ lập trình *hàm thuần tuý*. Một ví dụ về ngôn ngữ như vậy là Haskell, mà chúng ta sẽ gặp sau.

Những ngôn ngữ ấy không hỗ trợ các hàm thực hiện những thao tác như hiển thị thứ gì đó lên màn hình, làm I/O, v.v. (trong bối cảnh này, những thao tác ấy được gọi là “hiệu ứng phụ”.

Ở đó, những thao tác như vậy được *giao cho bên ngoài*, tức môi trường thực thi của ngôn ngữ. Thay vì viết các hàm trực tiếp thực hiện hiệu ứng phụ, chẳng hạn `console.log('Hello')`, chúng ta viết các hàm trả về một kiểu đại diện cho hiệu ứng phụ ấy (chẳng hạn, trong Haskell, hiệu ứng phụ được xử lý bằng kiểu `IO`), rồi môi trường thực thi chạy những hàm ấy cho chúng ta.

Sau đó, chúng ta hợp thành tất cả những hàm ấy thành một chương trình (bằng cách phân tách chúng theo một thứ gọi là *phong cách truyền tiếp diễn*).

## Phép hợp thành hàm

Bây giờ, chúng ta sắp chạm đến trọng tâm của chủ đề hàm. Đó là phép hợp thành hàm. Giả sử ta có hai hàm, và tập đích của hàm thứ nhất chính là tập nguồn của hàm thứ hai.

![Các hàm khớp nhau](../01_set/functions_matching.svg)

Nếu áp dụng hàm thứ nhất $g$ cho một phần tử thuộc tập hợp $Y$, ta sẽ được một phần tử thuộc tập hợp $P$. Sau đó, nếu áp dụng hàm thứ hai $f$ cho *phần tử ấy*, ta sẽ được một phần tử thuộc kiểu $G$.

![Áp dụng hàm này sau hàm kia](../01_set/functions_one_after_another.svg)

Ta có thể định nghĩa một hàm tương đương với việc thực hiện thao tác vừa mô tả:


{: .theorem}

> Với bất kỳ ba tập hợp $Y$, $P$ và $G$ cùng hai hàm $g: Y \to P$ và $f: P \to G$, ta có thể định nghĩa một hàm $f \circ g$ sao cho, nếu đi theo mũi tên $f \circ g$ từ bất kỳ phần tử nào của tập hợp $Y$, bạn sẽ đến cùng phần tử của tập hợp $G$ mà bạn sẽ đến nếu đi theo mũi tên $g$ rồi đến mũi tên $f$. Ta gọi $f \circ g$ là *hợp thành* của $g$ và $f$.

 (chú ý rằng trong $f \circ g$, hàm thứ nhất nằm bên phải, nên nó tương tự $f(g(a)$).

![Phép hợp thành hàm](../01_set/functions_compose.svg)

Phép hợp thành là cốt lõi của mọi điều thuộc về phạm trù. Nhận xét then chốt là tổng của hai phần không phức tạp hơn bản thân các phần ấy (và vì vậy có thể tiếp tục cộng (hợp thành)). Nhận xét này được thể hiện qua tính chất gọi là tính kết hợp, mà chúng ta sẽ xem xét sau.

**Bài tập 8:** Hãy nghĩ xem những đặc điểm nào của hàm khiến phép hợp thành thực hiện được; chẳng hạn, nó có dùng được với các loại quan hệ khác như nhiều-nhiều và một-nhiều không?

### Phép hợp thành trong đời sống hằng ngày

Để hiểu phép hợp thành mạnh đến mức nào, hãy xét điều sau: một tập hợp được nối với tập hợp khác có nghĩa là mỗi hàm đi từ tập hợp thứ hai đều có thể được chuyển thành một hàm tương ứng đi từ tập hợp thứ nhất.

Nếu ta có một hàm $g: P \to Y$ từ tập hợp $P$ đến tập hợp $Y$, thì với mỗi hàm $f$ từ tập hợp $Y$ đến bất kỳ tập hợp nào khác, có một hàm tương ứng $f \circ g$ từ tập hợp $P$ đến cùng tập hợp ấy. Nói cách khác, mỗi lần định nghĩa một hàm mới từ $Y$ đến một tập hợp nào khác, bạn được thêm miễn phí một hàm từ $P$ đến cùng tập hợp ấy.

![Các kết nối từ phép hợp thành hàm: một hàm nối hai tập hợp P -> Y, một loạt hàm Y -> X nối Y với các tập hợp khác, tạo thành một loạt hàm P -> X](../01_set/morphism_general.svg)

Chẳng hạn, nếu lấy quan hệ giữa một người và mẹ của người ấy làm một hàm gọi là “mẹ”, với nguồn là tập hợp mọi người trên thế giới và đích cũng là tập hợp đó, thì hợp thành hàm này với chính nó sẽ cho hàm “bà ngoại”, còn hợp thành nó với hàm “chị/em gái” sẽ cho hàm “dì”.

![Các kết nối từ phép hợp thành hàm: một hàm mang nhãn “mẹ” nối tập hợp mọi người với chính nó, cùng các hợp thành của “mẹ” với chính nó và với hàm “chị/em gái”, tạo thành một loạt hàm mới (“bà ngoại” và “dì”](../01_set/morphism_general.svg)

Và nếu tiếp tục hợp thành hai hàm ấy (cũng như các hàm tương ứng cho nam giới là “cha” và “anh/em trai”, chúng ta sẽ có mọi quan hệ tổ tiên có thể có.

Ví dụ này làm nổi bật một khả năng quan trọng mà phép hợp thành hàm đem lại --- khả năng phân tách các quan hệ phức hợp thành những viên gạch cơ bản cấu thành chúng.

### Phép hợp thành trong kỹ thuật

Ngoài việc hữu ích cho *phân tích* những quan hệ đã tồn tại, nguyên lý hợp thành còn cho phép bạn *xây dựng* những đối tượng có các quan hệ như vậy (còn gọi là làm kỹ thuật).

Điểm khác biệt chính giữa kỹ thuật hiện đại và nghề thủ công thời xưa là khái niệm *bộ phận/mô-đun/thành phần* --- một sản phẩm thực hiện một chức năng cho trước, được chế tạo để tối ưu cho việc kết hợp với các sản phẩm tương tự nhằm tạo thành một sản phẩm dành cho “người dùng cuối”, thay vì dùng trực tiếp.

Chẳng hạn, một *máy pha espresso* chỉ là sự kết hợp của các thành phần như *bơm, bộ gia nhiệt, cụm máy xay*, v.v., khi chúng được hợp thành theo cách thích hợp.

![Một máy pha espresso](../01_set/machine.svg)

**Bài tập 9:** Hãy nghĩ xem nguồn và đích của những hàm ấy sẽ là gì.

Nhân tiện, các sơ đồ được “thu nhỏ” để thể hiện hàm mà không thể hiện phần tử của tập hợp được gọi là *sơ đồ bên ngoài*, đối lập với những sơ đồ chúng ta đã thấy trước đó, vốn là *sơ đồ bên trong*.

### Phép hợp thành và sơ đồ bên ngoài

Hãy xem sơ đồ minh hoạ phép hợp thành hàm, trong đó chúng ta cho thấy việc áp dụng lần lượt hai hàm được hợp thành ($f \circ g$) và hàm mới ($h$) là tương đương.

![Phép hợp thành hàm](../01_set/functions_compose.svg)

Chúng ta đã cho thấy sự tương đương này bằng cách vẽ một sơ đồ *bên trong*, vẽ rõ các phần tử của nguồn và đích của các hàm sao cho hai đường đi tương đương.

Một cách khác là chỉ *nói* rằng mọi đường đi theo mũi tên đều tương đương (mọi mũi tên xuất phát từ một phần tử tập hợp cho trước cuối cùng đều dẫn đến cùng phần tử tương ứng của tập hợp kết quả), rồi vẽ sự tương đương ấy thành một sơ đồ bên ngoài.

![Một sơ đồ bên ngoài thể hiện phép hợp thành hai hàm](../01_set/functions_compose_sets.svg)

Hoặc, nếu bạn muốn thể hiện nó dưới dạng công thức.

![Một sơ đồ bên ngoài thể hiện phép hợp thành hai hàm dưới dạng công thức](../01_set/functions_compose_formula.svg)

Sơ đồ bên ngoài biểu diễn khái niệm hợp thành thích hợp hơn vì nó tổng quát hơn. Thực ra, nó tổng quát *đến mức* có thể dùng làm *định nghĩa phép hợp thành hàm*.

{: .definition}

> Hợp thành của hai hàm $f$ và $g$ là một hàm thứ ba $h$ được định nghĩa sao cho mọi đường đi trong sơ đồ này đều tương đương.
>
> ![Phép hợp thành hàm - định nghĩa tổng quát](../01_set/functions_compose_general.svg)

Nếu đọc tiếp cuốn sách này, bạn sẽ nghe thêm về những sơ đồ mà mọi đường đi đều tương đương (nhân tiện, chúng được gọi là *sơ đồ giao hoán*).

### Tính kết hợp

Nếu muốn hợp thành nhiều hơn hai hàm, ta có thể tự hỏi thứ tự thực hiện phép hợp thành có ảnh hưởng đến kết quả cuối cùng không; nghĩa là kết hợp hai hàm rồi kết hợp kết quả với hàm thứ ba...

![Hợp thành các hàm (f và g) với c](../01_set/functions_associativity_external.svg)

...có cho cùng kết quả với việc hợp thành hàm thứ hai và thứ ba trước, rồi thêm hàm thứ nhất hay không.

![Hợp thành hàm f với (g và c)](../01_set/functions_associativity_external_2.svg)

Câu trả lời là thứ tự thực hiện phép hợp thành không quan trọng --- miễn là hợp thành cùng các hàm, kết quả sẽ luôn như nhau.

![Hợp thành các hàm f (g c) = (f g) c](../01_set/associativity_formula_function.svg)

Nghĩa là có nhiều cách để thu được cùng một hàm.

![Hợp thành các hàm f, g và c --- thể hiện hai đường đi f (g c) và (f g) c dưới dạng cây.](../01_set/associativity_function_tree.svg)

Tính chất này của hàm được gọi là *tính kết hợp*.

{: .theorem}

> Phép hợp thành hàm có tính kết hợp, nghĩa là với bất kỳ các hàm $f$ $g$ và $c$ có chữ ký kiểu thích hợp, $(f \circ g ) \circ c$ giống với $f \circ (g \circ c)$.

*Bài tập 10:* Hãy vẽ các sơ đồ trên thành sơ đồ bên trong: định nghĩa ba hàm có thể hợp thành với nhau (bạn có thể dùng hai hàm chúng ta đã định nghĩa trước đó, chỉ cần tạo thêm hàm thứ ba), hợp thành chúng theo hai cách ở trên và kiểm tra xem kết quả có giống nhau không.

### Lý thuyết phạm trù --- gợi ý cho định nghĩa

Đến đây, bạn có thể lo rằng tôi đã quên mình phải nói về lý thuyết phạm trù và chỉ đang trình bày một loạt khái niệm chẳng liên quan. Đôi khi tôi quả có thể làm vậy, nhưng lúc này thì không --- việc *phép hợp thành hàm* có thể được trình bày mà chẳng cần nhắc đến lý thuyết phạm trù không ngăn nó là một trong *những khái niệm quan trọng nhất* của lý thuyết phạm trù.

Thực ra, chúng ta có thể nói (dù đây không phải định nghĩa chính thức) rằng...

{: .definition}

> Lý thuyết phạm trù nghiên cứu những thứ *giống hàm* (hợp thành với nhau theo cách có tính kết hợp).

Những thứ ấy không nhất thiết là hàm, nhưng có nguồn và đích như hàm, hợp thành với nhau như hàm (có tính kết hợp), và có thể được biểu diễn bằng sơ đồ bên ngoài.

Và có một cách khác để định nghĩa lý thuyết phạm trù mà không định nghĩa lý thuyết phạm trù: đó là thứ bạn có được nếu thay khái niệm bằng nhau bằng khái niệm *đẳng cấu*.

Chúng ta chưa nói về đẳng cấu, nhưng đó là điều sẽ làm trong phần còn lại của chương này.

## Đẳng cấu

Để giải thích đẳng cấu là gì, chúng ta trở lại những ví dụ về các loại quan hệ mà hàm có thể biểu diễn, và với loại đầu tiên, sơ đẳng nhất trong tất cả &mdash; quan hệ *một-một*. Chúng ta biết rằng trong mọi hàm, đúng một phần tử của tập nguồn trỏ đến một phần tử của tập đích. Nhưng với các hàm một-một, *chiều ngược lại cũng đúng* &mdash; đúng một phần tử của tập đích trỏ đến một phần tử của tập nguồn.

![Các màu đối lập](../01_set/function_one_one.svg)

Nếu có một hàm một-một nối các tập hợp cùng kích thước (như trong trường hợp này), thì hàm ấy có tính chất sau: mọi phần tử của tập đích đều có đúng một mũi tên trỏ tới. Trong trường hợp ấy, hàm *khả nghịch*. Nghĩa là, nếu đảo các mũi tên của hàm và hoán đổi nguồn với đích, bạn sẽ có một hàm hợp lệ khác.

![Các màu đối lập](../01_set/isomorphism_one_one.svg)

Các hàm khả nghịch được gọi là *đẳng cấu*. Khi có một hàm khả nghịch giữa hai tập hợp, ta nói các tập hợp ấy *đẳng cấu*. Chẳng hạn, vì có một hàm khả nghịch chuyển nhiệt độ đo bằng độ *Celsius* thành nhiệt độ đo bằng độ *Fahrenheit*, và ngược lại, ta có thể nói nhiệt độ đo bằng độ Celsius và Fahrenheit là đẳng cấu.

Đẳng cấu có nghĩa là “cùng hình dạng” trong tiếng Hy Lạp (dù thực ra hình dạng lại là điều duy nhất khác nhau giữa hai tập hợp đẳng cấu).

Bây giờ đã đến lúc định nghĩa đẳng cấu một cách hình thức. Một cách làm là như sau:

{: .definition}

> (Bên trong) Hai tập hợp $A$ và $B$ là đẳng cấu (hay $A ≅ B$) nếu có một quan hệ một-một giữa các phần tử của chúng.

Định nghĩa này không nói gì về đặc điểm quan trọng nhất của đẳng cấu --- tính khả nghịch. Vì vậy, chúng ta sẽ trình bày một định nghĩa khác:

{: .definition}

> (Bên ngoài) Hai tập hợp $A$ và $B$ là đẳng cấu (hay $A ≅ B$) nếu có các hàm $f: A \to B$ và hàm ngược của nó $g: B \to A$, sao cho $f \circ g = ID_{A}$ và $g \circ f = ID_{B}$.

Hãy chú ý hàm đồng nhất hữu ích như thế nào. Thực ra, hãy chú ý rằng khái niệm đẳng cấu chỉ được định nghĩa bằng hàm đồng nhất và phép hợp thành hàm; đây là định nghĩa đầu tiên hoàn toàn bên ngoài, hoàn toàn *theo ngôn ngữ phạm trù* của chúng ta (nếu không tính bản thân phép hợp thành).

### Đẳng cấu và đồng nhất

Nếu nhìn kỹ, bạn sẽ thấy hàm đồng nhất cũng khả nghịch (hàm ngược của nó là chính nó),

{: .theorem}

> Hàm đồng nhất là một đẳng cấu.

Vậy mỗi tập hợp đều đẳng cấu với chính nó theo cách ấy.

![Hàm đồng nhất](../01_set/isomorphism_identity.svg)

Vậy khái niệm đẳng cấu bao hàm khái niệm bằng nhau &mdash; mọi thứ bằng nhau cũng đẳng cấu.

### Đẳng cấu và phép hợp thành

Một điều thú vị về đẳng cấu là: nếu có các hàm chuyển một phần tử của tập hợp $A$ thành một phần tử của tập hợp $B$, và theo chiều ngược lại, thì nhờ phép hợp thành hàm, ta biết mọi hàm đi từ $A$ đều có một hàm tương ứng đi từ $B$, và ngược lại.

![Cấu trúc của đẳng cấu](../01_set/isomorphism_general.svg)

Chẳng hạn, nếu có một hàm “là vợ/chồng của” đi từ tập hợp mọi người đã kết hôn đến chính tập hợp ấy, thì hàm đó khả nghịch. Điều này không có nghĩa bạn và người bạn đời là cùng một người, mà là mọi phát biểu về bạn, hoặc mọi quan hệ bạn có với một người hay đối tượng khác, cũng là một quan hệ giữa người bạn đời của bạn với người/đối tượng ấy, và ngược lại.

### Hợp thành các đẳng cấu

Một điều thú vị khác về đẳng cấu là: nếu có hai đẳng cấu chung một tập hợp, thì ta có thể thu được một đẳng cấu thứ ba giữa hai tập hợp còn lại, là kết quả hợp thành của chúng (các đẳng cấu).

{: .theorem}

> Hai tập hợp cùng đẳng cấu với một tập hợp thứ ba thì đẳng cấu với nhau.

Ta có thể hợp thành hai đẳng cấu thành một đẳng cấu khác bằng cách hợp thành hai cặp hàm tạo nên đẳng cấu theo hai chiều.

![Hợp thành các đẳng cấu](../01_set/isomorphisms_compose.svg)

Theo cách không hình thức, ta có thể thấy hai cấu xạ quả thực là hàm ngược của nhau và do đó tạo thành một đẳng cấu. Nếu muốn chứng minh điều ấy một cách hình thức, chúng ta sẽ làm như sau:

Nếu hai hàm là đẳng cấu thì hợp thành của chúng bằng một hàm đồng nhất; chứng minh các hàm $g \circ f$ và $f' \circ g'$ là đẳng cấu tương đương với chứng minh hợp thành của chúng bằng đồng nhất.

$g \circ f \circ f' \circ g' = id$

Nhưng chúng ta đã biết $f$ và $f'$ là đẳng cấu, và do đó $f\circ f' = id$, nên công thức trên tương đương với công thức sau (bạn có thể đối chiếu sơ đồ để xem điều đó có nghĩa gì):

$g \circ id \circ g' = id$

Và chúng ta biết bất cứ thứ gì hợp thành với $id$ đều bằng chính nó, nên điều này tương đương với:

$g \circ g' = id$

Điều này đúng, vì $g$ và $g'$ là đẳng cấu, và các hàm đẳng cấu khi hợp thành thì bằng đồng nhất.

Nhân tiện, còn một cách khác để thu được đẳng cấu &mdash; hợp thành hai cấu xạ theo một chiều để có hàm thứ ba, rồi lấy hàm ngược của nó. Nhưng để làm vậy, chúng ta phải chứng minh rằng hàm thu được khi hợp thành hai đẳng cấu cũng là một đẳng cấu.

### Đẳng cấu giữa các tập hợp đơn

Giữa hai tập hợp đơn bất kỳ, ta có thể định nghĩa hàm duy nhất có thể có.

![Hàm duy nhất có thể có giữa các tập hợp đơn](../01_set/singleton_function.svg)

Hàm ấy khả nghịch, nghĩa là mọi tập hợp đơn đều đẳng cấu với nhau; hơn nữa (đây là điều quan trọng), chúng đẳng cấu *theo một cách duy nhất*.

![Các tập hợp đơn đẳng cấu](../01_set/singleton_isomorphism.svg)

## Đẳng cấu và sự tương đương

Chúng ta đã nói các tập hợp đẳng cấu không nhất thiết là cùng một tập hợp (dù chiều ngược lại đúng). Tuy nhiên, khó tránh khỏi ý nghĩ rằng đẳng cấu có nghĩa là chúng *bằng nhau* hoặc *tương đương* về một phương diện nào đó. Chẳng hạn, tất cả những người được nối bằng quan hệ mẹ/con *đẳng cấu* đều có chung một số gen.

Và trong khoa học máy tính, nếu có các hàm chuyển một đối tượng kiểu $A$ thành một đối tượng kiểu $B$ và theo chiều ngược lại (chẳng hạn các hàm giữa một cấu trúc dữ liệu và id của nó), ta cũng gần như có thể coi $A$ và $B$ là hai định dạng của cùng một thứ, vì có thứ này đồng nghĩa với việc dễ dàng thu được thứ kia.

### Quan hệ tương đương

Hai thứ tương đương với nhau nghĩa là gì? Câu hỏi nghe khá triết học, nhưng thực ra có một cách hình thức để trả lời; nghĩa là có một khái niệm toán học nắm bắt khái niệm bằng nhau khá thanh nhã &mdash; khái niệm *quan hệ tương đương*.

Vậy quan hệ tương đương là gì? Chúng ta đã biết quan hệ là gì --- đó là một kết nối giữa hai tập hợp (hàm là một ví dụ). Nhưng khi nào một quan hệ là quan hệ tương đương? Theo định nghĩa, đó là khi nó tuân theo ba quy luật, tương ứng với ba ý tưởng trực giác về sự bằng nhau.

{: .definition}

> Quan hệ tương đương giữa các tập hợp là một quan hệ tuân theo các quy luật phản xạ, bắc cầu và đối xứng.

Hãy xem lần lượt từng quy luật.

#### Tính phản xạ

Ý tưởng đầu tiên xác định sự tương đương là *mọi thứ đều tương đương với chính nó*.

![Tính phản xạ](../01_set/reflexivity.svg)

Nguyên lý đơn giản này được chuyển thành quy luật *phản xạ* cũng đơn giản như vậy: với mọi tập hợp $A$, $A=A$.

#### Tính bắc cầu

Theo thần học Kitô giáo về Ba Ngôi, Cha của Jesus là Thiên Chúa, Jesus là Thiên Chúa, và Chúa Thánh Thần cũng là Thiên Chúa; tuy nhiên, Chúa Cha không phải cùng một ngôi vị với Jesus (Jesus cũng không phải Chúa Thánh Thần). Nếu bạn thấy điều này kỳ lạ thì đó là vì nó vi phạm quy luật thứ hai của quan hệ tương đương: tính bắc cầu. Tính bắc cầu là ý tưởng rằng những thứ cùng bằng một thứ thứ ba thì cũng phải bằng nhau.

![Tính bắc cầu](../01_set/transitivity.svg)

Viết theo ngôn ngữ toán học, với mọi tập hợp $A$ $B$ và $C$, nếu $A=B$ và $B=C$ thì $A=C$.

Lưu ý rằng ta không cần định nghĩa điều xảy ra trong những tình huống tương tự có hơn ba tập hợp, vì có thể giải quyết chúng chỉ bằng cách áp dụng nhiều lần cùng quy luật này.

#### Tính đối xứng

Nếu một thứ bằng một thứ khác, chiều ngược lại cũng đúng, nghĩa là thứ kia cũng bằng thứ đầu tiên. Ý tưởng này gọi là *tính đối xứng*. Tính đối xứng có lẽ là tính chất đặc trưng nhất của quan hệ tương đương, và nó không đúng với gần như mọi quan hệ khác.

![Tính đối xứng](../01_set/symmetry.svg)

Theo ngôn ngữ toán học: nếu $A=B$ thì $B=A$.

### Đẳng cấu như quan hệ tương đương

Có lẽ bạn đang nghi rằng...

{: .theorem}

> Các đẳng cấu là quan hệ tương đương.

Các đẳng cấu quả *là* quan hệ tương đương. Và “tình cờ”, chúng ta đã có mọi thông tin cần để chứng minh điều đó (giống như James Bond dường như luôn tình cờ có đúng những thiết bị cần thiết để hoàn thành nhiệm vụ).

Chúng ta đã nói tính chất đặc trưng nhất của quan hệ tương đương là *tính đối xứng*. Và đẳng cấu thoả mãn tính chất này nhờ tính chất đặc trưng nhất của nó, đó là *tính khả nghịch*.

![Tính đối xứng của đẳng cấu](../01_set/isomorphism_symmetry.svg)

**Bài tập 11:** Đã xong một quy luật, còn hai quy luật nữa: hãy xem lại phần trước và kiểm tra rằng đẳng cấu cũng thoả mãn các quy luật còn lại của quan hệ tương đương.

Điều tôi muốn nói qua tất cả những điều này là coi bất kỳ đẳng cấu nào như sự bằng nhau đều *có lý*. Vì vậy, cách dùng đẳng cấu để định nghĩa một quan hệ tương đương rất phổ biến trong lý thuyết phạm trù, nơi đẳng cấu được ký hiệu bằng $≅$, gần giống với cách ký hiệu sự bằng nhau $=$ (chú ý rằng ký hiệu ấy cũng giống hai mũi tên song song nối tập hợp này với tập hợp kia).

<!--
{% if site.distribution == 'print'%}
-->

## Phần xen kẽ - các số như những đẳng cấu

Nhiều người sẽ nói khái niệm số là khái niệm cơ bản nhất trong toán học. Nhưng thực ra họ sai --- *tập hợp và đẳng cấu còn cơ bản hơn*! Hoặc ít nhất, có thể định nghĩa các số bằng tập hợp và đẳng cấu.

Để hiểu bằng cách nào, hãy nghĩ xem bạn dạy một người số là gì như thế nào (cụ thể, ở đây chúng ta sẽ tập trung vào số *tự nhiên*, hay số dùng để đếm). Bạn có thể bắt đầu bài học bằng cách cho họ xem một số đồ vật có số lượng cho trước; chẳng hạn, nếu muốn minh hoạ số $2$, bạn có thể mang đến hai chiếc bút chì, hai quả táo hoặc hai thứ gì khác.

![Hai quả bóng](../01_set/number_two.svg)

Khi làm vậy, điều quan trọng là nhấn mạnh rằng bạn không chỉ nói đến đồ vật bên trái hoặc chỉ đồ vật bên phải, mà chúng ta nên xét cả hai cùng lúc, nghĩa là cả hai như một; vậy nếu người bạn đang giải thích tình cờ biết tập hợp là gì, kiến thức ấy có thể hữu ích. Ngoài ra, để làm người thầy tốt, ta có thể đưa thêm một số ví dụ về những tập hợp gồm 2 thứ.

![Một tập hợp gồm hai quả bóng](../01_set/number_two_sets.svg)

Đây là một điểm xuất phát tốt, nhưng người ấy vẫn có thể đang nhìn vào các đồ vật thay vì cấu trúc &mdash; họ có thể hỏi tập hợp này hay tập hợp kia có phải cũng là $2$ không. Đến đây, nếu người bạn đang giải thích tình cờ biết về đẳng cấu (giả sử họ từng sống trong một hang động, bên mình chẳng có gì ngoài cuốn sách này), bạn có thể dễ dàng phát biểu định nghĩa cuối cùng: số $2$ được biểu diễn bằng những tập hợp ấy và mọi tập hợp khác đẳng cấu với chúng, hoặc bằng *lớp tương đương* của những tập hợp có hai phần tử, như định nghĩa hình thức phát biểu (đừng lo, sau này chúng ta sẽ tìm hiểu đầy đủ về lớp tương đương).

![Một tập hợp gồm hai quả bóng](../01_set/number_two_isomorphism.svg)

Đến đây, chúng ta không thể thêm ví dụ nào nữa. Thực ra, vì đã xét cả mọi tập hợp khác, ta có thể nói đây không chỉ là một loạt ví dụ, mà là một *định nghĩa* thực sự của số $2$. Và ta có thể mở rộng điều đó để bao gồm mọi số khác. Thực ra, định nghĩa đầu tiên về số tự nhiên (do Gottlob Frege đưa ra năm 1884) đại thể dựa trên chính ý tưởng này.

Trước khi khép lại chương, có một lưu ý về cách tiếp cận mà chúng ta nhất định nên nêu: theo định nghĩa số vừa trình bày, một số không phải là một *đối tượng*, mà là cả một *hệ thống các đối tượng liên kết với nhau*, trong trường hợp này chứa vô số đối tượng. Điều này có thể khiến bạn thấy kỳ lạ, nhưng thực ra nó khá đặc trưng cho cách mô hình hoá sự vật theo phạm trù.

<!--
{%endif%}
-->

<!--
{% if site.distribution == 'print' %}
-->

## Bổ sung: Phép hợp thành trong phát triển phần mềm

> Một thiết kế nguyên khối không có cấu trúc không phải ý hay, trừ có lẽ một hệ điều hành tí hon trong, chẳng hạn, máy nướng bánh mì; nhưng ngay cả khi ấy điều này vẫn còn gây tranh luận.--- Andrew S. Tanenbaum

Phát triển phần mềm là một lĩnh vực kỳ lạ --- về lý thuyết, nó chỉ nên là một dạng *kỹ thuật*, nhưng cách thực hiện trên thực tế đôi khi lại gần với *nghề thủ công* hơn, và nguyên lý hợp thành chưa được tận dụng hết mức.

Để thấy vì sao, hãy hình dung một người (chẳng hạn tôi) đang mày mò với một vấn đề kỹ thuật nào đó, chẳng hạn cố sửa một chiếc máy hoặc chỉnh sửa nó để phục vụ mục đích mới. Nếu chiếc máy ấy là máy cơ khí hoặc điện, người này gần như buộc phải xoay xở bằng những thành phần sẵn có, đơn giản vì họ hiếm khi đủ khả năng tự chế tạo thành phần mới (hoặc ít nhất sẽ tránh làm vậy nếu có thể). Hạn chế này buộc các nhà sản xuất thành phần tạo ra những thành phần linh hoạt và hoạt động tốt với nhau, giống như các hàm thuần tuý hoạt động tốt với nhau. Đến lượt mình, điều này giúp các kỹ sư dễ dàng tạo ra những chiếc máy tốt hơn mà không phải tự làm mọi việc.

Nhưng nếu chiếc máy ấy dựa trên phần mềm thì mọi chuyện lại khác --- vì việc đưa ra các thành phần phần mềm mới rất dễ dàng, thiết kế của chúng ta có thể làm mờ ranh giới phân chia một số thành phần, hoặc thậm chí bỏ hẳn khái niệm thành phần và biến toàn bộ chương trình thành một thành phần khổng lồ (*thiết kế nguyên khối*). Tệ hơn nữa, khi không có thành phần làm sẵn, cách này thực ra dễ hơn cách dựa trên thành phần mà chúng ta mô tả ở đoạn trước, nên nhiều người dùng nó.

Điều này không hay, vì lợi ích của thiết kế nguyên khối chủ yếu là ngắn hạn --- việc không được chia thành các thành phần khiến chương trình khó suy luận hơn, khó chỉnh sửa hơn (chẳng hạn bạn không thể thay một thành phần lỗi bằng một thành phần mới), và nhìn chung sơ khai hơn các chương trình dựa trên thành phần. Vì những lý do ấy, tôi nghĩ các lập trình viên đang bỏ lỡ lợi ích nếu không sử dụng các nguyên lý hợp thành hàm. Thực ra, tôi không hài lòng với tình hình đến mức quyết định viết cả một cuốn sách về lý thuyết phạm trù ứng dụng để giúp mọi người hiểu rõ hơn các nguyên lý hợp thành; cuốn sách có tên Category Theory Illustrated (Ồ khoan, tôi đang viết chính cuốn ấy ngay lúc này, đúng không?)

Dù sao, cách tiếp cận hợp thành đôi khi được dùng trong lập trình, và khi được dùng thì thường hoạt động khá tốt. Để thấy một vài ví dụ, bạn chẳng cần tìm đâu xa ngoài toán tử đường ống trong Unix (`|`), đưa đầu ra chuẩn của một chương trình vào đầu vào chuẩn của chương trình khác.

Nếu _muốn_ tìm xa hơn, hãy xem ngôn ngữ lập trình Haskell hoặc một trong vô số thư viện lập trình hàm dành cho các ngôn ngữ khác. Cũng có cả một mô hình lập trình dựa trên phép hợp thành hàm, gọi là “lập trình nối”, được dùng trong những ngôn ngữ như Forth và Factor.



## Lời giải


---

**Bài tập 1:** Tập đích của hàm “Cha tôi là ai?” là gì?

Đó là tập hợp mọi người làm cha. Hoặc đơn giản là tập hợp mọi người (luôn có thể nâng cấp một hàm bằng cách mở rộng tập đích của nó).

---

**Bài tập 2:** Tất cả các hàm mà chúng ta vẽ ở đầu phần này có *thể hiện* điều gì không? Bạn có nghĩ rằng một hàm phải thể hiện điều gì đó thì mới hợp lệ không?

Không, một hàm không *cần* thể hiện một quan hệ có ý nghĩa để hợp lệ, nhưng những hàm khiến chúng ta *quan tâm* thì vẫn thể hiện điều gì đó.

Chúng ta sẽ nói nhiều về điều này trong các chương tiếp theo.

---

**Bài tập 3:** Hàm từ tập hợp rỗng đến bất kỳ tập hợp nào khác có thực sự hợp lệ không? Vì sao? Hãy kiểm tra định nghĩa.

Có, nó hợp lệ. Số không là một số tự nhiên! Điều này được gọi là *chân lý rỗng*, khi điều kiện được thoả mãn đơn giản vì không có trường hợp nào cần kiểm tra.

---

**Bài tập 4:** Còn chiều ngược lại thì sao? Có những hàm có tập hợp rỗng làm đích thay vì làm nguồn không?

Không, không có. Với một ngoại lệ. Hãy đọc tiếp để biết.

---

**Bài tập 5:** Hàm từ bất kỳ tập hợp nào đến một tập hợp đơn có thực sự là cách duy nhất để nối chúng một cách hợp lệ không?

Có. Vì tập hợp đơn chứa đúng một phần tử nên chỉ có một cách định nghĩa hàm có nó làm đích.

---

**Bài tập 6:** Một lần nữa, chiều ngược lại thì sao?

Với bất kỳ tập hợp $A$ nào, có một hàm từ một tập hợp đơn đến $A$ (nghĩa là $1 \to A$, cho mỗi phần tử của $A$. Chúng ta sẽ gặp những hàm này trong chương tiếp theo.

---

**Bài tập 7:** Trong lập trình, kiểu nào tương ứng với tập hợp con?

Kiểu tương ứng là một *kiểu con*. Chẳng hạn, kiểu `Square` là một kiểu con của `Rectangle`, nghĩa là mọi `Square` *là một* `Rectangle` (và mọi hàm đòi hỏi đối số kiểu `Rectangle` đều chấp nhận `Square` (nhưng không theo chiều ngược lại)).

---

**Bài tập 8:** Hãy nghĩ xem những đặc điểm nào của hàm khiến phép hợp thành thực hiện được. Nó có dùng được với các loại quan hệ khác như nhiều-nhiều và một-nhiều không?

Quan hệ nhiều-một (hàm) bảo đảm có đúng *một* đầu ra cho mỗi đầu vào, nghĩa là khi nối đầu ra của $g$ với đầu vào của $f$, không có sự mơ hồ về giá trị cần truyền.

Với quan hệ một-nhiều hoặc nhiều-nhiều, đầu ra có thể gồm *nhiều* giá trị.

---

**Bài tập 9:** Hãy nghĩ xem nguồn và đích của những hàm ấy sẽ là gì. (Nói về các thành phần của máy pha espresso)

$$Grinder : WholeCoffeeBeans \to GroundCoffee$$
$$Heater : Water \to HotWater$$

v.v.

---

**Bài tập 10:** Hãy vẽ các sơ đồ trên thành sơ đồ bên trong: định nghĩa ba hàm có thể hợp thành với nhau (bạn có thể dùng hai hàm chúng ta đã định nghĩa trước đó, chỉ cần tạo thêm hàm thứ ba), hợp thành chúng theo hai cách ở trên và kiểm tra xem kết quả có giống nhau không.

Chỗ này bạn phải tự làm rồi, xin lỗi nhé :)

---

**Bài tập 11:** Đã xong một quy luật, còn hai quy luật nữa: hãy kiểm tra rằng đẳng cấu cũng thoả mãn các quy luật còn lại của quan hệ tương đương [Tính phản xạ và tính bắc cầu].


Trước hết, tính phản xạ --- với bất kỳ tập hợp $A$ nào, hàm đồng nhất $id_A: A → A$ là một đẳng cấu --- hàm ngược của nó là chính nó. Vậy mọi tập hợp đều đẳng cấu với chính nó ($A ≅ A$).

Tính bắc cầu: chúng ta muốn chứng minh rằng nếu có các đẳng cấu $A ≅ B$ và $B ≅ C$ thì có $A ≅ C$.

Đẳng cấu $A ≅ B$ gồm các hàm $A \to B$ và $B \to A$.

Tương tự, $B ≅ C$ gồm các hàm $B \to C$ và $C \to B$.

Hợp thành những hàm này một cách thích hợp, ta có hai hàm $A \to C$ và $C \to A$ khả nghịch, vì các thành phần của chúng khả nghịch.

<!--
{%endif%}
-->
