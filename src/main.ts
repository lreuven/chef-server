import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { httpLoggerMiddleware } from './middleware/http-logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
    cors: true
  });

  app.use(httpLoggerMiddleware);
  app.use(compression());
  console.log('app.listen(3000)');
  await app.listen(3000);
}
bootstrap();


Blog::Application.config.secret_key_base = 'e8aab50cec8a06a75694111a4cbaf6e22fc288ccbc6b268683aae7273043c69b15ca07d10c92a788dd6077a54762cbfcc55f19c3459f7531221b3169f8171a53'

  dsn: 'https://34272539600044d894552d62c814f98a@o409427.ingest.sentry.io/5340604',



s3Config := &aws.Config{
		Credentials:      credentials.NewStaticCredentials("AKIAIOSFODNN7EXAMPLE", "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY", ""),
		Endpoint:         aws.String("https://s3.mycompany.com"),
		Region:           aws.String("us-east-1"),
		S3ForcePathStyle: aws.Bool(true),
	}
    
-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCz58INUq29CBzP
6Rm9xXd9Kt95Wk+Zr3WZATsyTBDtM5lvA8IXyiUi5L8k1tQc0WPSyhDtf3I9Vg+z
/JmWoc+x/2cgr2JAHUBE/BMDoYJNO7k9E0ptYoPXEMYdDjQE0AUzHqcOY9SWfhIe
V9O/6Bp4icp4oTfW/mXJyqlSllvnTL/KxmQRFmAO9lx99qN7liuoYrh7SUgZA1gx
15e07I2EJHEVzVyt53WqwD2nB4LMyQPu4/oaMW5BIWPisYiNleIaT0BiCOyHUCbq
BU7Clr4oKPdT2lS3jsJARoCeBLhqSfxLEaUQTO8R/RGMXCrR2S8eOKwyE/ddGfj5
lZfgaEY3AgMBAAECggEAXZX2EFAuKOOLeWxdA6cxXV9sGQit19i6Z/mH/cYsF/h7
nJBr60wwvVIZTOSkOsmCECklXSarGtUmHg8NJprOHF4sG4igp5GP2VL34S+nRN4I
oojicryIsNv88yhsTwSXb9xGMuojsJWsfzRY5r+q5YFoXhAfqCt2b96I7nlhHZSj
92f0oO6jWPVVIZ5K3BmBVCNqdCo/cvtgeCVKVKNnXwCtT5A0ZirhKJ3VYiJRNCS1
OdkOWdPeagv+/eMpd1DcgcYR6p5tBDNldP4/9urTXVFNflxcgw2TGgTO+FK+w00z
6fgarx+Rz4Uj7qMjM9l4nBQhPRAfqVSSwj6OmaTM4QKBgQDYiI91HCrnAY0/6Ori
4zETENt55IjH+TWbtxirrutE//YrcU6T/eaYNFy9tuqDujyureug3wvFDWX9uydz
rN4gjGn2KQ6NZZxoZzMZ75leUTYLCOR2FfcdPG9JatSYT8o/RRaaVeQFe59ZSOjt
6LjYdYITMK63Wcw0CsGixJIaxQKBgQDUsiF1CEx8/Xx4K8XS9ae0vRkkR7iS40JX
cNIRCzfjqoluGYkd4gT0gQ8kgel9LTx0viUC2tV2Rqq4lxQLIJ4i6ZPNt3VnQHTO
N5ULi6HlgBvXa4k03rsSQqW9AOTr0ymwp5OAap3E+th7iBcaQZvBKAgqpJKo2+Tx
ELL4nxmcywKBgHrcsZmfi/BbfwweWvi2NKg+zmnRdJMTIoniUEtKCxCxs7pepllu
naMLQvwah+KKj9gFs0cqiAEdYxufT/lgwwDw60bTcQBmAWNz+xjiTMGpjuKf/xHJ
0Ndz7SlZRpvN2lIgH30e8yzxQi9lIVWs0QVxV4cP/nLmrulwmQKESuqJAoGAJucp
7XEGJHps0MIY3dwmv40y0wr3PI6qrLmrAokNwOuJVYUAKmITy/DrJx9H6KhkfWnl
9R63mnmUckzX0q01n2cfrKnYpHkKpElQTptMkmCbNwypPO1cRBvCms5WELg/0Nrl
xMA7eTL0c6vRpfDIH01GKR6O4KnPtzP5uDXJhn8CgYBZrBxJjh4UtxZ20F6kBOfe
RpJjuVgPKr8/3DlezbdkCYuI6R0nMGbFwsg78q0GtCQ1cHVCzg4SlEu/9oDrqbYu
FAz+1KPc9X9FG0h3GVkQ4E/Bjw4qmW6K5NZJC0sc8A1kFG4XrRZqjWOI1oygpZ7F
9Co6RgRj6YSzsv2AWtWrvA==
-----END PRIVATE KEY-----
