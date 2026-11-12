const hexagon = 'M20 1 37 11 37 31 20 41 3 31 3 11Z';

const clusters = {
  projects: [
    { side: 'left', top: '4%', width: 112, opacity: 0.14, cells: [[0, 8, 0.98], [39, 0, 0.88]] },
    { side: 'right', top: '12%', width: 164, opacity: 0.12, cells: [[20, 0, 0.9], [58, 12, 1.02], [96, 0, 0.88], [0, 45, 0.94], [77, 48, 1.02]] },
    { side: 'left', top: '25%', width: 126, opacity: 0.13, cells: [[0, 0, 0.9], [44, 16, 1.04], [88, 0, 0.86]] },
    { side: 'right', top: '32%', width: 138, opacity: 0.15, cells: [[0, 12, 0.92], [40, 0, 1], [80, 20, 0.88], [39, 47, 0.94]] },
    { side: 'left', top: '45%', width: 182, opacity: 0.12, cells: [[0, 0, 0.92], [39, 17, 1.04], [78, 0, 0.9], [20, 49, 0.96], [99, 50, 0.88], [138, 32, 0.96]] },
    { side: 'right', top: '53%', width: 106, opacity: 0.14, cells: [[18, 0, 1], [57, 18, 0.9]] },
    { side: 'left', top: '69%', width: 144, opacity: 0.15, cells: [[0, 8, 0.94], [39, 0, 1.02], [78, 20, 0.88], [39, 48, 0.96]] },
    { side: 'right', top: '74%', width: 174, opacity: 0.11, cells: [[18, 0, 0.9], [58, 16, 1.04], [98, 0, 0.92], [0, 48, 0.96], [78, 53, 0.9]] },
    { side: 'left', bottom: '4%', width: 104, opacity: 0.13, cells: [[0, 16, 0.92], [41, 0, 1]] },
    { side: 'right', bottom: '2%', width: 132, opacity: 0.14, cells: [[0, 0, 0.9], [40, 16, 1], [80, 0, 0.94], [39, 48, 0.88]] }
  ],
  experience: [
    { side: 'left', top: '5%', width: 124, opacity: 0.12, cells: [[0, 0, 0.9], [42, 15, 1.02], [84, 0, 0.88]] },
    { side: 'right', top: '12%', width: 178, opacity: 0.15, cells: [[20, 0, 0.92], [60, 14, 1.02], [100, 0, 0.88], [0, 47, 0.96], [80, 51, 0.9], [120, 38, 0.94]] },
    { side: 'left', top: '28%', width: 154, opacity: 0.13, cells: [[0, 10, 0.94], [42, 0, 0.9], [84, 18, 1.02], [42, 49, 0.92]] },
    { side: 'right', top: '39%', width: 108, opacity: 0.12, cells: [[0, 0, 0.9], [42, 18, 1.02]] },
    { side: 'left', top: '56%', width: 184, opacity: 0.14, cells: [[0, 0, 0.92], [40, 18, 1.02], [80, 0, 0.9], [20, 50, 0.94], [100, 49, 1.02], [140, 26, 0.88]] },
    { side: 'right', top: '68%', width: 146, opacity: 0.11, cells: [[0, 15, 0.9], [41, 0, 1.02], [82, 16, 0.92], [41, 48, 0.88]] },
    { side: 'right', bottom: '12%', width: 114, opacity: 0.15, cells: [[0, 0, 0.92], [42, 18, 1.02], [84, 0, 0.9]] },
    { side: 'left', bottom: '3%', width: 150, opacity: 0.12, cells: [[18, 0, 0.9], [58, 15, 1.02], [98, 0, 0.92], [58, 48, 0.9]] }
  ]
};

const edgeOffset = 'max(0.5rem, calc((100% - 1280px) / 2))';

function DecorativeHoneycomb({ variant }) {
  return (
    <div className={`decorative-honeycomb decorative-honeycomb--${variant}`} aria-hidden="true">
      {clusters[variant].map((cluster, clusterIndex) => (
        <svg
          key={`${variant}-cluster-${clusterIndex}`}
          className="decorative-honeycomb__cluster"
          viewBox="0 0 160 100"
          focusable="false"
          style={{
            top: cluster.top,
            right: cluster.side === 'right' ? edgeOffset : undefined,
            bottom: cluster.bottom,
            left: cluster.side === 'left' ? edgeOffset : undefined,
            width: `${cluster.width}px`,
            opacity: cluster.opacity,
            transform: clusterIndex % 3 === 1 ? 'rotate(6deg)' : clusterIndex % 3 === 2 ? 'rotate(-5deg)' : undefined
          }}
        >
          {cluster.cells.map(([x, y, scale], index) => (
            <path
              key={`${x}-${y}`}
              d={hexagon}
              transform={`translate(${x} ${y}) scale(${scale})`}
              className={index % 3 === 1 ? 'decorative-honeycomb__cell--blue' : undefined}
            />
          ))}
        </svg>
      ))}
    </div>
  );
}

export default DecorativeHoneycomb;
