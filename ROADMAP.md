# Josue Barros - Personal Site Roadmap

## Pre-Launch Checklist

### Email Configuration (Resend)
- [ ] Verify domain `josuebarros.com` at [resend.com/domains](https://resend.com/domains)
- [ ] Add DNS records provided by Resend:
  - TXT record for domain verification
  - MX record for receiving
  - SPF record for sending authentication
  - DKIM record for email signing
- [ ] Update `FROM_EMAIL` in `.env.local` to `contact@josuebarros.com` after verification

### Content
- [ ] Add real project results/metrics (currently commented out in ResultsSection)
- [ ] Add case studies to portfolio
- [ ] Write blog posts for SEO

### SEO & Analytics
- [ ] Verify Plausible Analytics is tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Set up personal LinkedIn to match site content

### Deployment
- [ ] Configure VPS with Node.js 18+
- [ ] Set up PM2 for process management
- [ ] Configure Nginx as reverse proxy
- [ ] Set up SSL certificate (Let's Encrypt)
- [ ] Configure environment variables on server

---

## Future Enhancements

### Phase 1 - Post Launch
- [ ] Add more blog content
- [ ] Implement code snippets/gists section
- [ ] Add downloadable resources (guides, templates)

### Phase 2 - Growth
- [ ] Add client testimonials section
- [ ] Create video content/demos
- [ ] Build email list with lead magnets
