class Main {

    public static void main(String[] args) throws Exception {

        int vals[] = {10, 40, 30, 50};

        int wts[] = {5, 4, 6, 3};

        int W = 10;

        System.out.println(knapsack(vals, wts, W));

   }


    public static int knapsack(int vals[], int wts[], int W) {

        //Fetch total number of items.


        int N = wts.length;


        // matrix.

        int[][] V = new int[N + 1][W + 1];

        //if the knapsack's capacity is 0 - Set

        //columns at row 0 to be 0

        for (int col = 0; col <= W; col++) {

            V[0][col] = 0;

        }



        //if there are no items at home.

        // the first row is 0
        for (int row = 0; row <= N; row++) {

            V[row][0] = 0;
        }

        for (int item=1;item<=N;item++){


          
            for (int weight=1;weight<=W;weight++){

                //check current items weight less than or equal to running weight

                if (wts[item-1]<=weight){



                    V[item][weight]=Math.max (vals[item-1]+V[item-1][weight-wts[item-1]], V[item-1][weight]);
                }

                else {



                    V[item][weight]=V[item-1][weight];
                }
            }

        }

        //Print matrix

        for (int[] rows : V) {

            for (int col : rows) {

                System.out.format("%5d", col);
            }
            System.out.println();
        }

        return V[N][W];

    }

}
