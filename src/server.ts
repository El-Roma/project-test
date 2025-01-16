export class Bookstore {
  private static readonly BOOK_PRICE = 8;
  private static readonly DISCOUNTS = [0, 0.05, 0.10, 0.20, 0.25];

  public static amountSeries(nbTome1: number, nbTome2: number, nbTome3: number, nbTome4: number, nbTome5: number): number {
    let books = [nbTome1, nbTome2, nbTome3, nbTome4, nbTome5];
    let totalPrice = 0;

    while (books.some(tome => tome > 0)) {
      let uniqueBooks = books.filter(tome => tome > 0).length;
      let discount = this.DISCOUNTS[uniqueBooks - 1];
      let price = uniqueBooks * this.BOOK_PRICE * (1 - discount);
      totalPrice += price;

      books = books.map(tome => tome > 0 ? tome - 1 : 0);
    }
    return parseFloat(totalPrice.toFixed(2));
  }
}