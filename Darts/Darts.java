import java.awt.geom.Point2D;

class Dart {

    
    public static void main(String[] args)
    private final double x;
    private final double y;
    private final Point2D CENTER = new Point2D.Double(0, 0);
    Dart(double x, double y) {
        this.x = x;
        this.y = y;
    }

    int score() {
        Point2D throws = new Point2D.Double(x, y);

        if (throws.distance(CENTER) > 10)
            return 0;
        else if (throws.distance(CENTER) > 5)
            return 1;
        else if (throws.distance(CENTER) > 1)
            return 5;
        else
            return 10;
    }
}

}

