const redirect = require('./redirect');

test('/2013/12/simple-fading-in-and-out-using-css-transitions.html to redirect to /2013/12/04/simple-fading-in-and-out-using-css-transitions', () => {
  const mockLogger = jest.fn();

  expect(
    redirect(
      '/2013/12/simple-fading-in-and-out-using-css-transitions.html',
      mockLogger
    )
  ).toEqual({
    status: 301,
    location: '/2013/12/04/simple-fading-in-and-out-using-css-transitions',
  });

  expect(mockLogger.mock.calls[0][0]).toBe(
    'x-ms-original-url: /2013/12/simple-fading-in-and-out-using-css-transitions.html'
  );
  expect(mockLogger.mock.calls[1][0]).toBe(
    'Redirecting /2013/12/simple-fading-in-and-out-using-css-transitions.html to /2013/12/04/simple-fading-in-and-out-using-css-transitions'
  );
});
